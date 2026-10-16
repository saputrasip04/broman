import BabLearningClient from "@/components/bab-learning-client";

export const instant = false;

export function generateStaticParams() {
  return [
    { fase: "E", bab: "E1" },
    { fase: "E", bab: "E2" },
    { fase: "E", bab: "E3" },
    { fase: "E", bab: "E4" },
    { fase: "F", bab: "F1" },
    { fase: "F", bab: "F2" },
    { fase: "F", bab: "F3" },
    { fase: "F", bab: "F4" },
    { fase: "F", bab: "F5" },
    { fase: "F", bab: "F6" },
    { fase: "F", bab: "F7" },
    { fase: "F", bab: "F8" },
    { fase: "F", bab: "P1" },
    { fase: "F", bab: "P2" },
    { fase: "P", bab: "P1" },
    { fase: "P", bab: "P2" },
  ];
}

export default async function BabLearningPage({
  params,
  searchParams,
}: {
  params: Promise<{ fase: string; bab: string }>;
  searchParams?: Promise<{ konten?: string; step?: string }>;
}) {
  const { fase, bab } = await params;
  const sp = searchParams ? await searchParams : {};
  const kNum = sp?.konten ? parseInt(sp.konten, 10) : 1;
  const initialKontenIndex = !isNaN(kNum) && kNum >= 1 ? kNum - 1 : 0;
  const sNum = sp?.step ? parseInt(sp.step, 10) : 1;
  const initialStepIndex = !isNaN(sNum) && sNum >= 1 ? sNum - 1 : 0;

  return (
    <BabLearningClient
      fase={fase.toUpperCase()}
      bab={bab.toUpperCase()}
      initialKontenIndex={initialKontenIndex}
      initialStepIndex={initialStepIndex}
    />
  );
}
