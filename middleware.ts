import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin") &&
                       !req.nextUrl.pathname.startsWith("/admin/login");

  const token = req.cookies.get("admin_auth")?.value;

  if (isAdminRoute && token !== "true") {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
