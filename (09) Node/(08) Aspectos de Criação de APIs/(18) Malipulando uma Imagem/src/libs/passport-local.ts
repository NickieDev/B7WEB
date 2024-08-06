import { Strategy as LocalStrategy } from 'passport-local'
import { createUserJWT, createUserToken, findUserByEmailAndPassword } from '../service/user'
import { User } from '../types/user'
import { RequestHandler } from 'express'
import passport from 'passport'

type LocalStrategyResponse = {
   auth: { token: string },
   user: User
}

// 01) Criar a estratégia de Validação
export const localStrategy = new LocalStrategy({
   usernameField: 'email',
   passwordField: 'password'
}, async(email, password, done) => {
   console.log(`Email: ${email}, Password: ${password}`)

   const user = await findUserByEmailAndPassword(email, password)

   if(user) {
      // const token = createUserToken(user)
      const token = createUserJWT(user)
      const response: LocalStrategyResponse = {
         auth: { token },
         user
      }

      return done(null, response)
   } else {
      return done(null, false)
   }
})

// 02) Middleware para inteferir na rota desejada
export const localStrategyAuth: RequestHandler = (req, res, next) => {
   const authRequest = passport.authenticate('local', 
      (err: any, response: LocalStrategyResponse | undefined) => {
         // console.log(auth)
         if(response) {
            req.user = response.user
            req.authInfo = response.auth
            return next()
         }

         return res.status(401).json({ error: 'Acesso negado.' })
   })

   authRequest(req, res, next)
}