'use client'

import { TodoItem } from "@/types/TodoItem"
import { useState } from "react"

const Page = () => {
  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<TodoItem[]>([
    { label: 'Fazer o dever de casa', checked: false },
    { label: 'Compar o bolo', checked: false },
  ])

  const handleAddButton = () => {
    if(itemInput.trim() === '') return 

    setList([
      ...list,
      { label: itemInput, checked: false }
    ])
    setItemInput('')
  }

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index))
  }

  const toggleItem = (index: number) => {
    let newList = [...list]

    /*for(let i in newList) {
      if(index === parseInt(i)) {
        newList[i].checked = !newList[i].checked
      }
    }*/

    newList[index].checked = !newList[index].checked

    setList(newList)
  }

  return (
    <div className="w-screen h-screen flex flex-col  items-center">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border border-gray-500">

        <input type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-clack p-3 text-2xl text-black rounded-md mr-3"
          value={ itemInput }
          onChange={ e => setItemInput(e.target.value) }
        />
        <button onClick={ handleAddButton }>Adicionar</button>
      </div>

      <p className="my-4">{ list.length } itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        { list.map((item, index) => (
          <li key={ index }>
            <input 
              type="checkbox" checked={ item.checked } 
              className="w-6 h-5 m-3" 
              onClick={ () => toggleItem(index) } />

            { item.label } - <button 
              className="hover:underline"
              onClick={ () => deleteItem(index) }
            >[ Deletar ]</button>
          </li>
        )) }
      </ul>

    </div>
  )
}

export default Page