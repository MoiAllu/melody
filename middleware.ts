import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req) {

  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.ACCESS_KEY
    // const token ="123"
    console.log(token); 
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/signin'
      return NextResponse.rewrite(url)
      // return NextResponse.redirect('/signin')
    }
  }
}