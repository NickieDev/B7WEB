import { Strategy as LocalStrategy } from 'passport-local'
import { createUserToken, findUserByEmailAndPassword } from '../service/user'
import { User } from '../types/user'

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
      const token = createUserToken(user)
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