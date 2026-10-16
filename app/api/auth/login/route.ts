import { NextResponse } from "next/server";
import { DEMO_USERS, SESSION_COOKIE_NAME, UserSession } from "@/lib/auth";
import { UserRole } from "@/lib/types/database";
import { queryMySQL } from "@/lib/db/mysql";

export async function POST(request: Request) {
  try {
    let body: any = {};
    try {
      body = await request.json();
    } catch {
      body = {};
    }
    const { role, identifier } = body;

    const validRole: UserRole =
      role === "super_admin" || role === "guru" ? role : "murid";

    // Gunakan profil demo sebagai fallback dasar
    const baseUser = DEMO_USERS[validRole] || DEMO_USERS.murid;
    let sessionUser: UserSession = {
      ...baseUser,
      identifier: identifier || baseUser.identifier,
    };

    // 1. Coba verifikasi / cari user di MySQL XAMPP jika identifier diberikan
    if (identifier) {
      try {
        const mysqlRes = await queryMySQL<{
          id: string;
          full_name: string;
          role: UserRole;
          identifier: string;
          email: string;
        }>(
          "SELECT id, full_name, role, identifier, email FROM profiles WHERE identifier = ? OR email = ? LIMIT 1",
          [identifier, identifier]
        );

        if (mysqlRes.success && mysqlRes.data.length > 0) {
          const dbUser = mysqlRes.data[0];
          sessionUser = {
            id: dbUser.id,
            name: dbUser.full_name,
            role: dbUser.role,
            identifier: dbUser.identifier || identifier,
            email: dbUser.email || undefined,
            kelas: dbUser.role === "murid" ? "X BCF 1" : undefined,
          };

          // Update last_login_at
          queryMySQL("UPDATE profiles SET last_login_at = NOW() WHERE id = ?", [dbUser.id]).catch(() => {});
        }
      } catch {
        // Fallback tetap menggunakan sessionUser demo
      }
    }

    const requestUrl = new URL(request.url);
    const redirectParam = requestUrl.searchParams.get("redirect") || body.redirectUrl;

    let redirectUrl = redirectParam || "/belajar";
    if (!redirectParam) {
      if (sessionUser.role === "super_admin") {
        redirectUrl = "/admin";
      } else if (sessionUser.role === "guru") {
        redirectUrl = "/guru";
      }
    }

    const response = NextResponse.json({
      success: true,
      user: sessionUser,
      redirectUrl,
    });

    response.cookies.set(SESSION_COOKIE_NAME, JSON.stringify(sessionUser), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Gagal memproses login";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
