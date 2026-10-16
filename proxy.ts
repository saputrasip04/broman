import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { getSessionFromRequest } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  // 1. Perbarui session Supabase jika menggunakan Supabase Auth
  const response = await updateSession(request);

  const { pathname } = request.nextUrl;

  // Lewati file statis, favicon, API auth, dsb.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return response;
  }

  const session = getSessionFromRequest(request);

  // Proteksi Rute Admin (/admin)
  if (pathname.startsWith("/admin")) {
    if (!session) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    if (session.role !== "super_admin") {
      const unauthUrl = request.nextUrl.clone();
      unauthUrl.pathname = "/unauthorized";
      unauthUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(unauthUrl);
    }
  }

  // Proteksi Rute Guru (/guru)
  if (pathname.startsWith("/guru")) {
    if (!session) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    if (session.role !== "guru" && session.role !== "super_admin") {
      const unauthUrl = request.nextUrl.clone();
      unauthUrl.pathname = "/unauthorized";
      unauthUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(unauthUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
