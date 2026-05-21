export { auth as middleware } from "@/app/lib/auth";

export const config = {
  matcher: [
    "/admin/dashboard/:path*",
    "/admin/categories/:path*",
    "/admin/services/:path*",
    "/admin/meta/:path*",
  ],
};