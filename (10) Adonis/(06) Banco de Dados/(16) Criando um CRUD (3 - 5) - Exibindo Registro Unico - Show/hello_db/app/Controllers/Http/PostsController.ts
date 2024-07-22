import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {

   async index({}: HttpContextContract) {
      let allPosts = await Post.all()
      return allPosts
   }

   async store({request}: HttpContextContract) {
      /*let myData = {
         title: 'Minha primeira postagem',
         content: 'Este é p conteúdo da minha primeira postagem'
      }*/

      let myData = request.only(['title', 'content'])

      const postagem = await Post.create(myData)

      return postagem
   }

   async show({params, response}: HttpContextContract) {
      const posd_id = params.id
      const myPost = await Post.find(posd_id)

      if(!myPost) {
         // response.status(404)
         response.notFound()
      }

      return myPost
   }

}
