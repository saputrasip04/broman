import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BroMan — Media Pembelajaran Broadcasting & Perfilman SMK",
  description:
    "Platform Pembelajaran Interaktif Kurikulum Merdeka Fase E & F Broadcasting dan Perfilman SMK: Materi Interaktif, Kuis C1-C6, Game Edukasi, LKPD Praktikum, dan Asesmen Daring.",
  keywords: [
    "Broadcasting SMK",
    "Perfilman",
    "Kurikulum Merdeka",
    "Fase E",
    "Fase F",
    "Produksi Televisi",
    "Media Pembelajaran",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
        <Suspense fallback={<div className="h-16 w-full border-b border-slate-800/80 bg-[#0b0f19]" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
