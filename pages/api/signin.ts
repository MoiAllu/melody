// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
// import cookie from 'cookie'
// import prisma from "../../lib/prisma"
// import { NextApiRequest, NextApiResponse } from "../../node_modules/next/dist/shared/lib/utils"

// export default async (req: NextApiRequest,res:NextApiResponse)=>{
//     const {email,password}=req.body;

//     const user = await prisma.user.findUnique({
//         where: {
//           email,
//         },
//       })
//     if(user && bcrypt.compareSync(password,user.password)){
//         const token= jwt.sign({
//             email: user.email,
//             id: user.id,
//             time: Date.now(),
//             },"Hello",
//             {
//                 expiresIn:"8h"
//     })
//     res.setHeader(
//         "Set-Cookie",
//         cookie.serailize("MELODY_ACESS_TOKEN", token,{
//             httpOnly:true,
//             maxAge: 8*60*60,
//             path:"/",
//             sameSite:"lax",
//             secure: process.env.NODE_ENV==="production"
//         })
//     )
//     res.json(user)
//     }else {
//         res.status(401)
//         res.json({ error: 'Email or Password is wrong' })
//       }
// }
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email
    },
  })

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      'hello',
      {
        expiresIn: '8h',
      }
    )

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('MELODY_ACESS_TOKEN', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    )

    res.json(user)
  } else {
    res.status(401)
    res.json({ error: 'Email or Password is wrong' })
  }
}