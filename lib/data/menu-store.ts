import { useSyncExternalStore } from "react";
import {
  MenuVisibilityFlags,
  DEFAULT_MENU_FLAGS,
  MENU_STORAGE_KEY,
  MENU_UPDATE_EVENT,
} from "./menu-types";

export type { MenuVisibilityFlags };
export { DEFAULT_MENU_FLAGS, MENU_STORAGE_KEY, MENU_UPDATE_EVENT };

let cachedMenuSnapshot: MenuVisibilityFlags | null = null;
let hasInitializedFromDb = false;

function subscribeMenuStore(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  
  // Hydrate dari database MySQL pada saat pertama kali komponen subscribe di browser
  if (!hasInitializedFromDb) {
    hasInitializedFromDb = true;
    fetchAndHydrateMenuFlagsFromDatabase().catch(() => {});
  }

  const handler = () => {
    cachedMenuSnapshot = null;
    callback();
  };
  window.addEventListener(MENU_UPDATE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(MENU_UPDATE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function getMenuSnapshot(): MenuVisibilityFlags {
  if (typeof window === "undefined") return DEFAULT_MENU_FLAGS;
  if (!cachedMenuSnapshot) {
    cachedMenuSnapshot = getStoredMenuFlags();
  }
  return cachedMenuSnapshot;
}

function getMenuServerSnapshot(): MenuVisibilityFlags {
  return DEFAULT_MENU_FLAGS;
}

/**
 * Hook reaktif untuk seluruh pengaturan visibilitas menu & fitur
 */
export function useMenuVisibilityStore(): MenuVisibilityFlags {
  return useSyncExternalStore(
    subscribeMenuStore,
    getMenuSnapshot,
    getMenuServerSnapshot
  );
}

/**
 * Membaca flags dari localStorage
 */
export function getStoredMenuFlags(): MenuVisibilityFlags {
  if (typeof window === "undefined") return DEFAULT_MENU_FLAGS;
  try {
    const raw = localStorage.getItem(MENU_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(DEFAULT_MENU_FLAGS));
      localStorage.removeItem("broman_menu_visibility_flags");
      localStorage.removeItem("broman_menu_visibility_flags_v2");
      localStorage.removeItem("broman_menu_visibility_flags_v3");
      return DEFAULT_MENU_FLAGS;
    }
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_MENU_FLAGS, ...parsed };
  } catch {
    return DEFAULT_MENU_FLAGS;
  }
}

/**
 * Menyimpan seluruh flags ke localStorage dan trigger reaktif ke seluruh komponen
 */
export function saveMenuFlags(flags: MenuVisibilityFlags): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(flags));
    cachedMenuSnapshot = flags;
    window.dispatchEvent(new Event(MENU_UPDATE_EVENT));

    // Sinkronisasi otomatis ke basis data MySQL XAMPP di background
    syncMenuFlagsToDatabase(flags).catch(() => {});
  } catch (err) {
    console.error("Gagal menyimpan flags menu:", err);
  }
}

/**
 * Menyimpan flags hanya ke memori/localStorage tanpa memicu upload ulang ke DB
 */
function saveMenuFlagsLocalOnly(flags: MenuVisibilityFlags): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(flags));
    cachedMenuSnapshot = flags;
    window.dispatchEvent(new Event(MENU_UPDATE_EVENT));
  } catch {}
}

/**
 * Sinkronisasi seluruh flags menu ke endpoint database MySQL
 */
export async function syncMenuFlagsToDatabase(
  flags: MenuVisibilityFlags | { key: string; is_enabled: boolean }
): Promise<{ success: boolean; message?: string }> {
  if (typeof window === "undefined") return { success: false };
  try {
    const body = "menu_belajar" in flags ? { flags } : flags;
    const res = await fetch("/broman/api/admin/menu/flags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err) {
    console.warn("Gagal sinkronisasi flags ke MySQL:", err);
    return { success: false };
  }
}

/**
 * Mengambil status settingan menu teranyar dari basis data MySQL XAMPP
 */
export async function fetchAndHydrateMenuFlagsFromDatabase(): Promise<MenuVisibilityFlags | null> {
  if (typeof window === "undefined") return null;
  try {
    const res = await fetch("/broman/api/admin/menu/flags", { cache: "no-store" });
    const data = await res.json();
    if (data.success && data.flags) {
      const merged: MenuVisibilityFlags = {
        ...DEFAULT_MENU_FLAGS,
        ...data.flags,
      };
      saveMenuFlagsLocalOnly(merged);
      return merged;
    }
  } catch (err) {
    console.warn("Tidak dapat mengambil flags dari MySQL, menggunakan cache lokal:", err);
  }
  return null;
}

/**
 * Toggle satu key menu (true -> false, false -> true)
 */
export function toggleMenuFlag(key: keyof MenuVisibilityFlags): boolean {
  const current = getStoredMenuFlags();
  const nextVal = !current[key];
  const updated: MenuVisibilityFlags = {
    ...current,
    [key]: nextVal,
  };
  saveMenuFlags(updated);
  return nextVal;
}

/**
 * Set spesifik nilai key menu
 */
export function setMenuFlag(key: keyof MenuVisibilityFlags, isVisible: boolean): void {
  const current = getStoredMenuFlags();
  const updated: MenuVisibilityFlags = {
    ...current,
    [key]: isVisible,
  };
  saveMenuFlags(updated);
}

/**
 * Reset seluruh menu ke default (semua aktif)
 */
export function resetMenuFlagsToDefault(): void {
  saveMenuFlags(DEFAULT_MENU_FLAGS);
}

