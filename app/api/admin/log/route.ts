import { NextResponse } from "next/server";
import { queryMySQL, checkMySQLStatus } from "@/lib/db/mysql";

export async function GET() {
  try {
    const dbStatus = await checkMySQLStatus();
    if (!dbStatus.connected) {
      return NextResponse.json({
        success: true,
        source: "memory_fallback",
        logs: [],
      });
    }

    const res = await queryMySQL<{
      id: string;
      created_at: string;
      user: string;
      role: string;
      action: string;
      target: string;
      details: string;
    }>(
      `SELECT 
         a.id, 
         DATE_FORMAT(a.created_at, '%d %b %Y, %H:%i:%s') as timestamp, 
         COALESCE(p.full_name, 'Administrator BroMan') as user, 
         COALESCE(p.role, 'super_admin') as role, 
         a.action, 
         COALESCE(a.entity, 'System') as target, 
         COALESCE(a.meta, '-') as details,
         'success' as status
       FROM activity_logs a 
       LEFT JOIN profiles p ON a.user_id = p.id 
       ORDER BY a.created_at DESC 
       LIMIT 50`
    );

    return NextResponse.json({
      success: true,
      source: "mysql_xampp",
      logs: res.success && res.data ? res.data : [],
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
