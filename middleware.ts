import {getToken} from "next-auth/jwt";
import {NextResponse} from "next/server";

export async function middleware(request: Request) {
    // 获取 JWT token
    const token = await getToken({req: request, secret: process.env.JWT_SECRET});

    // 如果没有 token并且不是login或者register的话，重定向到登录页面
    if (!token) {
        const path = new URL(request.url).pathname;
        if (path.startsWith('/login') || path.startsWith('/register')) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next();

}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
