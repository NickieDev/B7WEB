import { RequestHandler } from "express";
import { createContact, deleteContact, getContacts } from '../models/contact';
import sharp from "sharp"; 'sharp'

export const getContactsController: RequestHandler = async (req, res) => {
   let list = await getContacts();
   res.json({ contatos: list });
}

export const createContactController: RequestHandler = async (req, res) => {
   const { name } = req.body;

   //console.log(req.file)
   if(!req.file || (req.file && !req.file.mimetype.includes('image'))) {
      return res.json({ error: 'Nenhuma imagem recebida' });
   }

   if (!name || name.length < 2) {
      return res.json({ error: 'Nome precisa ter pelo menos 2 caracteres.' });
   }

   await sharp(req.file.path)
      .resize(300, 300, { fit: 'cover'})
      .toFile(`public/avatars/${ req.file.filename }.jpg`)

   await createContact(name);

   res.status(201).json({ contato: name, photo: `http://localhost:3001/avatars/${ req.file.filename }.jpeg` });
}

export const deleteContactController: RequestHandler = async (req, res) => {
   const { name } = req.query;

   if (!name) {
      return res.json({ error: 'Precisa mandar um nome para excluir.' });
   }

   await deleteContact(name as string);

   res.json({ contato: name });
}