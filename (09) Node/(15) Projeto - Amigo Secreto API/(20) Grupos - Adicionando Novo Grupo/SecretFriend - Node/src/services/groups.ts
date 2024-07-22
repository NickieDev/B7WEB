import { PrismaClient, Prisma } from "@prisma/client"
import * as events from './events'

const prisma = new PrismaClient()

export const getAll = async(id_event: number) => {
   try {
      return await prisma.eventGroup.findMany({ where: { id_event } })
   } catch(err) { return false }
}

type GetOneFilters = { id: number, id_event?: number }
export const getOne = async(filters: GetOneFilters) => {
   try {
      return await prisma.eventGroup.findFirst({ where: filters })
   } catch(err) { return false }
}

type GroupsCreateData = Prisma.Args<typeof prisma.eventGroup, 'create'>['data']
   // Pega o modelo da propria table
export const add = async(data: GroupsCreateData) => {
   try {
      // Verifica se tem o id_event
      if(!data.id_event) return false

      // Verifica se tem o event
      const eventItem = await events.getOne(data.id_event)

      if(!eventItem) return false
      
      return await prisma.eventGroup.create({ data })
   } catch(err) { return false }
}