import { NextResponse } from 'next/server'

// matcher allows to execute middleware to run on specific paths
export const config = {
    matcher: '/:path*',
}

export function middleware(request) {
    console.log("middleware")
    // // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
    // // Getting cookies from the request using the `RequestCookies` API
    // let cookie = request.cookies.get('nextjs')
    // console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
    // const allCookies = request.cookies.getAll()
    // console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
    //
    // request.cookies.has('nextjs') // => true
    // request.cookies.delete('nextjs')
    // request.cookies.has('nextjs') // => false
    //
    // // Setting cookies on the response using the `ResponseCookies` API
    // const response = NextResponse.next()
    // response.cookies.set('vercel', 'fast')
    // response.cookies.set({
    //     name: 'vercel',
    //     value: 'fast',
    //     path: '/',
    // })
    // cookie = response.cookies.get('vercel')
    // console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
    // // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

    // Manage custom scheme
    const response = NextResponse.next()
    // response.cookies.set('vercel', 'fast')

    const cookie_3cd_scheme = request.cookies.get("3cd_scheme")
    if (cookie_3cd_scheme === undefined) {

    }



    // return response
}