import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt'
import { findUserById } from '../service/user'
import passport from 'passport'
import { RequestHandler } from 'express'
import { User } from '../types/user'

const options = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: process.env.JWT_KEY as string
}

export const jwtStrategy = new JWTStrategy(options, async(payload, done) => {
   console.log(`Payload: ${ payload }`)
   const { id } = payload

   const user = await findUserById(id)

   if(user) {
      return done(null, user)
   } else {
      return done(null, false)
   }
})

export const jwtStrategyAuth: RequestHandler = (req, res, next) => {
   const authRequest = passport.authenticate('jwt',
      (err: any, user: User | false) => {
         if(user) {
            req.user = user
            return next()
         }

         res.status(401).json({ error: 'Acesso negado.' })
      })

      authRequest(req, res, next)
}