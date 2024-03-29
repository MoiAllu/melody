import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.MELODY_ACCESS_KEY;
    if (token) {
      let user
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        user = await prisma.user.findUnique({
          where: { id },
        })
        if (!user) {
          throw new Error('Not real user')
        }
      } catch (error) {
        res.status(401)
        res.json({ error: 'Not Authorizied' })
        return
      }
      return handler(req, res, user)
    }

    res.status(401)
    res.json({ error: 'Not Authorizied' })
  }
}

export const validateToken = (token) => {
  const user =  jwt.verify(token, process.env.JWT_SECRET)
  return user
}
