import { User } from "../types/user"

export const findUserByEmailAndPassword = async(email: string, password: string) => {
   if(email === 'admin@email.com' && password === '1234') {
      const user: User = {
         id: '2',
         name: 'Fulano'
      }

      return user
   }

   return null
}

export const createUserToken = (user: User) => {
   return '1234'
}

export const findUserByToken = async(token: string) => {
   // Consultar DB
   if(token === '1234') {
      const user: User = {
         id: '2',
         name: 'Fulano'
      }

      return user
   }

   return null
}