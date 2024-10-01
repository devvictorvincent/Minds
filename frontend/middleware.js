import { NextResponse } from "next/server";

export function middleware(request){
    const token = request.cookies.get('token');
    if(!token){
        return NextResponse.redirect(
            new URL('/login', request.url)
        )
    }
    console.log('running');
    return NextResponse.next()
}

export const config ={
    matcher: ['/me/:path*']
}