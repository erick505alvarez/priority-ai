import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const config = {
  matcher: [
    "/protected/:path*", // applies to /protected and all subroutes
  ],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Get JWT token from cookies

  // Protect routes under /protected
  if (req.nextUrl.pathname.startsWith("/protected")) {
    if (!token) {
      const loginUrl = new URL("/login", req.url); // Redirect to login if no token
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Verify the token using the secret from process.env
      jwt.verify(token, process.env.JWT_SECRET as string); // Access secret here
    } catch (err) {
      console.error("Invalid token:", err);
      const loginUrl = new URL("/login", req.url); // Redirect on invalid token
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next(); // Allow access if authenticated
}
