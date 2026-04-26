import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/home", request.url));
  }
}
