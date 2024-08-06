import * as ContactModel from "../models/contact"

// Adicionar um novo contato
export const getContatacts = async() => {
   const list = await ContactModel.getContacts()
   return list
}

//Listat todos os contatos
export const createContact = async(name: string) => {
   await ContactModel.createContact(name)
}

// Delete todos os contatos
export const deleteContact = async(name: string) => {
   await ContactModel.deleteContact(name)
}