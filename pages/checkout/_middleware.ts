import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
// import { jwt } from '../../utils';


export async function middleware( req: NextRequest, ev: NextFetchEvent ) {

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // console.log({ session });

    if ( !session ) {
        const requestedPage = req.page.name;
        // return NextResponse.redirect(`/auth/login?p=${ requestedPage }`);
         const url = req.nextUrl.clone()
         return NextResponse.redirect(`${url.origin}/auth/login?p=${requestedPage}`)
    }

    return NextResponse.next();


    // const { token = '' } = req.cookies;

    // return new Response('No autorizado', {
    //     status: 401
    // });

    // try {
    //     const valid = await jwt.isValidToken( token );
    //     console.log('valid ', valid);
    //     return NextResponse.next();

    // } catch (error) {
        
    //     // return Response.redirect('/auth/login');
    //     const requestedPage = req.page.name;
    //     // return NextResponse.redirect(`/auth/login?p=${ requestedPage }`);
    //     const url = req.nextUrl.clone()
    //     return NextResponse.redirect(`${url.origin}/auth/login?p=${requestedPage}`)
    // }

}


