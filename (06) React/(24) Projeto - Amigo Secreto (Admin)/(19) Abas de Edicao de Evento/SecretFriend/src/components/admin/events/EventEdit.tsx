'use client'

import { Event } from "@/types/Event";
import { useState } from "react";

type Props = {
   event: Event | undefined
   refreshAction: () => void
}

type TabName = 'info' | 'groups'| 'people'

export const EventEdit = ({ event, refreshAction }: Props) => {
   if(!event) return

   const [tab, setTab] = useState<TabName>('info')

   return(
      <div>
         <div className="flex text-center border-b border-gray-500 cursor-pointer">
            <div onClick={ () => setTab('info') } className={`flex-1 p-3 hover:bg-gray-700 ${ tab === 'info' ? 'bg-gray-600' : '' }`}>
               Informações
            </div>

            <div onClick={ () => setTab('groups') } className={`flex-1 p-3 hover:bg-gray-700 ${ tab === 'groups' ? 'bg-gray-600' : '' }`}>
               Grupos
            </div>

            <div onClick={ () => setTab('people') } className={`flex-1 p-3 hover:bg-gray-700 ${ tab === 'people' ? 'bg-gray-600' : '' }`}>
               Pessoas
            </div>
         </div>

         <div>
            { tab === 'info' && 'Infoo' }

            { tab === 'groups' && 'Groupss' }
            
            { tab === 'people' && 'Peopless' }
         </div>
      </div>
   )

}