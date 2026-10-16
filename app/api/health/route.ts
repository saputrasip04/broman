import { NextResponse } from "next/server";
import { checkMySQLStatus } from "@/lib/db/mysql";

export async function GET() {
  const isSupabaseConfigured =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    !process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder");

  const mysqlStatus = await checkMySQLStatus();

  return NextResponse.json({
    status: "healthy",
    app: "BroMan",
    version: "1.0.0",
    curriculum: "Kurikulum Merdeka SMK Broadcasting dan Perfilman (Fase E & F)",
    mode: "hybrid",
    database: {
      active: mysqlStatus.connected ? "mysql_xampp" : "local_standalone",
      mysql_xampp: mysqlStatus,
      supabase: isSupabaseConfigured ? "connected" : "local-standalone-mode",
    },
    timestamp: new Date().toISOString(),
  });
}
