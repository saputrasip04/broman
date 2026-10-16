import { useSyncExternalStore } from "react";
import { ALL_ELEMEN } from "./curriculum";
import { ElemenData, MaterialCard, QuizQuestion, LKPDData, ElemenSubMenuItem, DEFAULT_ELEMEN_SUBMENUS } from "./curriculum-types";

export const CURRICULUM_STORAGE_KEY = "broman_custom_curriculum_data";
export const CURRICULUM_UPDATE_EVENT = "broman_curriculum_updated";

let cachedSnapshot: Record<string, ElemenData> | null = null;

function subscribeCurriculum(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => {
    cachedSnapshot = null;
    callback();
  };
  window.addEventListener(CURRICULUM_UPDATE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(CURRICULUM_UPDATE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function getCurriculumSnapshot(): Record<string, ElemenData> {
  if (typeof window === "undefined") return ALL_ELEMEN;
  if (!cachedSnapshot) {
    cachedSnapshot = getStoredCurriculum();
  }
  return cachedSnapshot;
}

function getCurriculumServerSnapshot(): Record<string, ElemenData> {
  return ALL_ELEMEN;
}

/**
 * Hook reaktif untuk seluruh 14 Elemen kurikulum (E1-E4, F1-F8, P1-P2)
 */
export function useCurriculumStore(): Record<string, ElemenData> {
  return useSyncExternalStore(subscribeCurriculum, getCurriculumSnapshot, getCurriculumServerSnapshot);
}

/**
 * Hook reaktif untuk satu Elemen spesifik
 */
export function useStoredElemen(code: string): ElemenData {
  const all = useCurriculumStore();
  return all[code] || ALL_ELEMEN[code];
}

/**
 * Mengambil seluruh data 14 Elemen dari localStorage jika ada,
 * atau default ALL_ELEMEN dari kurikulum BSKAP.
 */
export function getStoredCurriculum(): Record<string, ElemenData> {
  if (typeof window === "undefined") {
    return ALL_ELEMEN;
  }

  try {
    const raw = localStorage.getItem(CURRICULUM_STORAGE_KEY);
    if (!raw) return ALL_ELEMEN;
    const parsed = JSON.parse(raw);
    const merged: Record<string, ElemenData> = { ...ALL_ELEMEN };
    for (const key of Object.keys(parsed)) {
      merged[key] = {
        ...ALL_ELEMEN[key],
        ...parsed[key],
        contents:
          parsed[key]?.contents && parsed[key].contents.length > 0
            ? parsed[key].contents
            : ALL_ELEMEN[key]?.contents,
      };
    }
    return merged;
  } catch {
    return ALL_ELEMEN;
  }
}

/**
 * Mengambil data satu Elemen berdasarkan kode (misal E1, E3, F4)
 */
export function getStoredElemen(code: string): ElemenData {
  const all = getStoredCurriculum();
  return all[code] || ALL_ELEMEN[code];
}

/**
 * Menyimpan seluruh perubahan data kurikulum ke localStorage dan broadcast event
 */
export function saveStoredCurriculum(data: Record<string, ElemenData>): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(CURRICULUM_STORAGE_KEY, JSON.stringify(data));
    cachedSnapshot = data;
    window.dispatchEvent(new CustomEvent(CURRICULUM_UPDATE_EVENT, { detail: data }));
  } catch (err) {
    console.error("Gagal menyimpan data kurikulum:", err);
  }
}

/**
 * Mengubah informasi dasar Elemen (judul, ringkasan, alokasi JP, status publikasi)
 */
export function updateElemenBasic(
  code: string,
  updates: Partial<Pick<ElemenData, "title" | "summary" | "hours" | "status" | "cpText" | "deskripsi">>
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const updated: ElemenData = {
    ...current,
    ...updates,
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengubah alokasi JP untuk satu Elemen dan otomatis trigger sinkronisasi
 */
export function updateElemenHours(code: string, hours: number): ElemenData {
  const updated = updateElemenBasic(code, { hours });
  if (typeof window !== "undefined") {
    syncElemenHoursToDatabase({ code, hours }).catch(() => {});
  }
  return updated;
}

/**
 * Mengubah alokasi JP untuk beberapa Elemen sekaligus
 */
export function updateMultipleElemenHours(hoursMap: Record<string, number>): Record<string, ElemenData> {
  const all = getStoredCurriculum();
  const updatesArray: { code: string; hours: number }[] = [];

  for (const [code, hours] of Object.entries(hoursMap)) {
    const current = all[code] || ALL_ELEMEN[code];
    if (current && typeof hours === "number" && hours > 0) {
      all[code] = {
        ...current,
        hours,
      };
      updatesArray.push({ code, hours });
    }
  }

  saveStoredCurriculum(all);

  if (typeof window !== "undefined" && updatesArray.length > 0) {
    syncElemenHoursToDatabase(updatesArray).catch(() => {});
  }

  return all;
}

/**
 * Sinkronisasi data alokasi JP ke endpoint API / MySQL XAMPP
 */
export async function syncElemenHoursToDatabase(
  payload: { code: string; hours: number } | { code: string; hours: number }[]
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const body = Array.isArray(payload) ? { updates: payload } : payload;
    const res = await fetch("/broman/api/admin/curriculum/jp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}


/**
 * Menambahkan satu kartu materi ke Elemen
 */
export function addCardToElemen(code: string, card: MaterialCard): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const updated: ElemenData = {
    ...current,
    materialCards: [...current.materialCards, card],
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengubah kartu materi yang ada
 */
export function updateCardInElemen(code: string, index: number, card: MaterialCard): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const nextCards = [...current.materialCards];
  if (index >= 0 && index < nextCards.length) {
    nextCards[index] = card;
  }

  const updated: ElemenData = {
    ...current,
    materialCards: nextCards,
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Menghapus kartu materi dari Elemen
 */
export function removeCardFromElemen(code: string, index: number): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const updated: ElemenData = {
    ...current,
    materialCards: current.materialCards.filter((_, i) => i !== index),
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Menambahkan satu butir soal ke Elemen
 */
export function addQuestionToElemen(code: string, question: QuizQuestion): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  // Pastikan ID unik
  const nextId = question.id || Date.now();
  const newQ = { ...question, id: nextId };

  const updated: ElemenData = {
    ...current,
    sampleQuestions: [...current.sampleQuestions, newQ],
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengubah butir soal yang ada
 */
export function updateQuestionInElemen(
  code: string,
  questionId: number,
  updatedQ: QuizQuestion
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const nextQuestions = current.sampleQuestions.map((q) =>
    q.id === questionId ? { ...updatedQ, id: questionId } : q
  );

  const updated: ElemenData = {
    ...current,
    sampleQuestions: nextQuestions,
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Menghapus butir soal dari Elemen
 */
export function removeQuestionFromElemen(code: string, questionId: number): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const updated: ElemenData = {
    ...current,
    sampleQuestions: current.sampleQuestions.filter((q) => q.id !== questionId),
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Memperbarui data LKPD Praktikum
 */
export function updateLKPDInElemen(code: string, lkpd: LKPDData): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const updated: ElemenData = {
    ...current,
    lkpd,
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Memperbarui video edukasi
 */
export function updateVideoInElemen(
  code: string,
  video: { title: string; embedUrl: string; guide: string }
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  const updated: ElemenData = {
    ...current,
    video,
  };

  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengambil seluruh bank soal dari seluruh 12 Elemen
 */
export function getAllBankQuestions(): {
  question: QuizQuestion;
  elemenCode: string;
  elemenTitle: string;
}[] {
  const all = getStoredCurriculum();
  const results: {
    question: QuizQuestion;
    elemenCode: string;
    elemenTitle: string;
  }[] = [];

  Object.values(all).forEach((el) => {
    el.sampleQuestions.forEach((q) => {
      results.push({
        question: q,
        elemenCode: el.code,
        elemenTitle: el.title,
      });
    });
  });

  return results;
}

/**
 * Mengembalikan kurikulum ke data asli BSKAP
 */
export function resetCurriculumToDefault(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CURRICULUM_STORAGE_KEY);
  cachedSnapshot = ALL_ELEMEN;
  window.dispatchEvent(new CustomEvent(CURRICULUM_UPDATE_EVENT, { detail: ALL_ELEMEN }));
}

/**
 * Memperbarui susunan dan status menu & submenu pembelajaran suatu Elemen
 */
export function updateElemenSubMenus(code: string, subMenus: ElemenSubMenuItem[]): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const updated: ElemenData = {
    ...current,
    subMenus,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Toggle aktif/nonaktif submenu spesifik di dalam suatu Elemen
 */
export function toggleSubMenu(code: string, subMenuId: string, enabled: boolean): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const currentSubMenus = current.subMenus || DEFAULT_ELEMEN_SUBMENUS;
  const updatedSubMenus = currentSubMenus.map((s) => (s.id === subMenuId ? { ...s, enabled } : s));
  const updated: ElemenData = {
    ...current,
    subMenus: updatedSubMenus,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengubah detail submenu dalam suatu Elemen (judul, subtitle, badge, dsb.)
 */
export function updateSubMenuDetail(
  code: string,
  subMenuId: string,
  titleOrUpdates: string | Partial<ElemenSubMenuItem>,
  maybeSubtitle?: string
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const currentSubMenus = current.subMenus || DEFAULT_ELEMEN_SUBMENUS;

  let updates: Partial<ElemenSubMenuItem> = {};
  if (typeof titleOrUpdates === "string") {
    updates = { title: titleOrUpdates, subtitle: maybeSubtitle || "" };
  } else {
    updates = titleOrUpdates;
  }

  const updatedSubMenus = currentSubMenus.map((s) =>
    s.id === subMenuId ? { ...s, ...updates } : s
  );
  const updated: ElemenData = {
    ...current,
    subMenus: updatedSubMenus,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Memindahkan urutan submenu (naik atau turun)
 */
export function moveSubMenu(code: string, index: number, direction: "up" | "down"): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const list = [...(current.subMenus || DEFAULT_ELEMEN_SUBMENUS)];
  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= list.length) return current;

  const temp = list[index];
  list[index] = list[targetIndex];
  list[targetIndex] = temp;

  const reordered = list.map((item, idx) => ({
    ...item,
    order: idx + 1,
  }));

  const updated: ElemenData = {
    ...current,
    subMenus: reordered,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Reset menu & submenu suatu Elemen ke standar baku BSKAP
 */
export function resetElemenSubMenus(code: string): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const updated: ElemenData = {
    ...current,
    subMenus: DEFAULT_ELEMEN_SUBMENUS.map((s) => ({ ...s })),
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Menambahkan submenu kustom baru ke suatu Elemen
 */
export function addCustomSubMenu(
  code: string,
  item: Omit<ElemenSubMenuItem, "order">
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const currentSubMenus = current.subMenus || DEFAULT_ELEMEN_SUBMENUS;
  const newItem: ElemenSubMenuItem = {
    ...item,
    order: currentSubMenus.length + 1,
    enabled: true,
  };
  const updated: ElemenData = {
    ...current,
    subMenus: [...currentSubMenus, newItem],
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Menghapus submenu kustom dari suatu Elemen
 */
export function removeSubMenu(code: string, subMenuId: string): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const currentSubMenus = current.subMenus || DEFAULT_ELEMEN_SUBMENUS;
  const filtered = currentSubMenus
    .filter((s) => s.id !== subMenuId)
    .map((s, idx) => ({ ...s, order: idx + 1 }));
  const updated: ElemenData = {
    ...current,
    subMenus: filtered,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Terapkan preset alur belajar untuk Elemen tertentu
 */
export function applySubMenuPreset(
  code: string,
  preset: "all" | "theory" | "practical" | "assessment"
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const base = DEFAULT_ELEMEN_SUBMENUS.map((s) => ({ ...s }));

  if (preset === "all") {
    base.forEach((s) => (s.enabled = true));
  } else if (preset === "theory") {
    base.forEach((s) => {
      s.enabled = ["hook", "materi", "video"].includes(s.id);
    });
  } else if (preset === "practical") {
    base.forEach((s) => {
      s.enabled = ["materi", "game", "case", "lkpd"].includes(s.id);
    });
  } else if (preset === "assessment") {
    base.forEach((s) => {
      s.enabled = ["pretest", "materi", "kuis", "journal"].includes(s.id);
    });
  }

  const updated: ElemenData = {
    ...current,
    subMenus: base,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Memperbarui teks pemantik dan stimulus untuk Elemen
 */
export function updateElemenHook(
  code: string,
  hookQuestion: string,
  hookContext: string
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const updated: ElemenData = {
    ...current,
    hookQuestion,
    hookContext,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Memperbarui studi kasus industri untuk Elemen
 */
export function updateElemenCase(
  code: string,
  caseTitle: string,
  caseScenario: string,
  caseInstruction: string
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const updated: ElemenData = {
    ...current,
    caseTitle,
    caseScenario,
    caseInstruction,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengambil daftar kartu slide materi dari sub-konten tertentu
 */
export function getContentSlides(
  code: string,
  contentIdOrOrder: string | number
): MaterialCard[] {
  const elemen = getStoredElemen(code);
  if (!elemen.contents || elemen.contents.length === 0) {
    return elemen.materialCards || [];
  }
  const content = elemen.contents.find(
    (c) => c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)
  );
  return content?.materialCards || elemen.materialCards || [];
}

/**
 * Menambahkan slide baru ke sub-konten tertentu
 */
export function addSlideToContent(
  code: string,
  contentIdOrOrder: string | number,
  card: MaterialCard
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  if (!current.contents || current.contents.length === 0) {
    return addCardToElemen(code, card);
  }

  const updatedContents = current.contents.map((c) => {
    if (c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)) {
      return {
        ...c,
        materialCards: [...(c.materialCards || []), card],
      };
    }
    return c;
  });

  const updated: ElemenData = {
    ...current,
    contents: updatedContents,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengubah slide yang ada pada sub-konten tertentu
 */
export function updateSlideInContent(
  code: string,
  contentIdOrOrder: string | number,
  slideIndex: number,
  card: MaterialCard
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  if (!current.contents || current.contents.length === 0) {
    return updateCardInElemen(code, slideIndex, card);
  }

  const updatedContents = current.contents.map((c) => {
    if (c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)) {
      const nextCards = [...(c.materialCards || [])];
      if (slideIndex >= 0 && slideIndex < nextCards.length) {
        nextCards[slideIndex] = card;
      }
      return {
        ...c,
        materialCards: nextCards,
      };
    }
    return c;
  });

  const updated: ElemenData = {
    ...current,
    contents: updatedContents,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Menghapus slide dari sub-konten tertentu
 */
export function removeSlideFromContent(
  code: string,
  contentIdOrOrder: string | number,
  slideIndex: number
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  if (!current.contents || current.contents.length === 0) {
    return removeCardFromElemen(code, slideIndex);
  }

  const updatedContents = current.contents.map((c) => {
    if (c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)) {
      return {
        ...c,
        materialCards: (c.materialCards || []).filter((_, i) => i !== slideIndex),
      };
    }
    return c;
  });

  const updated: ElemenData = {
    ...current,
    contents: updatedContents,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mengatur ulang posisi/urutan slide pada sub-konten tertentu
 */
export function reorderSlidesInContent(
  code: string,
  contentIdOrOrder: string | number,
  fromIndex: number,
  toIndex: number
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  if (!current.contents || current.contents.length === 0) {
    const nextCards = [...(current.materialCards || [])];
    if (
      fromIndex >= 0 &&
      fromIndex < nextCards.length &&
      toIndex >= 0 &&
      toIndex < nextCards.length
    ) {
      const [moved] = nextCards.splice(fromIndex, 1);
      nextCards.splice(toIndex, 0, moved);
    }
    const updated: ElemenData = {
      ...current,
      materialCards: nextCards,
    };
    all[code] = updated;
    saveStoredCurriculum(all);
    return updated;
  }

  const updatedContents = current.contents.map((c) => {
    if (c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)) {
      const nextCards = [...(c.materialCards || [])];
      if (
        fromIndex >= 0 &&
        fromIndex < nextCards.length &&
        toIndex >= 0 &&
        toIndex < nextCards.length
      ) {
        const [moved] = nextCards.splice(fromIndex, 1);
        nextCards.splice(toIndex, 0, moved);
      }
      return {
        ...c,
        materialCards: nextCards,
      };
    }
    return c;
  });

  const updated: ElemenData = {
    ...current,
    contents: updatedContents,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Mereset slide pada sub-konten tertentu kembali ke data default standar industri
 */
export function resetContentSlidesToDefault(
  code: string,
  contentIdOrOrder: string | number
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];
  const defaultElemen = ALL_ELEMEN[code];

  if (!current.contents || !defaultElemen?.contents) {
    const updated: ElemenData = {
      ...current,
      materialCards: defaultElemen?.materialCards || [],
    };
    all[code] = updated;
    saveStoredCurriculum(all);
    return updated;
  }

  const defaultContent = defaultElemen.contents.find(
    (c) => c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)
  );

  const updatedContents = current.contents.map((c) => {
    if (c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)) {
      return {
        ...c,
        materialCards: defaultContent?.materialCards || [],
      };
    }
    return c;
  });

  const updated: ElemenData = {
    ...current,
    contents: updatedContents,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

/**
 * Memperbarui data video dan panduan observasi untuk sub-konten tertentu
 */
export function updateContentVideo(
  code: string,
  contentIdOrOrder: string | number,
  video: { title: string; embedUrl: string; guide: string }
): ElemenData {
  const all = getStoredCurriculum();
  const current = all[code] || ALL_ELEMEN[code];

  if (!current.contents || current.contents.length === 0) {
    const updated: ElemenData = {
      ...current,
      video,
    };
    all[code] = updated;
    saveStoredCurriculum(all);
    return updated;
  }

  const updatedContents = current.contents.map((c) => {
    if (c.id === contentIdOrOrder || c.order === Number(contentIdOrOrder)) {
      return {
        ...c,
        video,
      };
    }
    return c;
  });

  const updated: ElemenData = {
    ...current,
    contents: updatedContents,
  };
  all[code] = updated;
  saveStoredCurriculum(all);
  return updated;
}

