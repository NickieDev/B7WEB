import { Users } from "@/utils/users";
import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
   const { id } = req.query

   /*let myUser = null

   for(let i in Users) {
      if(Users[i].id.toString() === id) {
         myUser = Users[i]
      }
   }

   if(myUser) {
      res.json(myUser)
   } else {
      res.json({ error: 'Usuário não encontrado' })
   }*/

   
   for(let i in Users) {
      if(Users[i].id.toString() === id) {
         res.json(Users[i])
         return
      }
   }

   res.json({ error: 'Usuário não encontrado' })
}

export default handler