'use client'

import { ListReducer } from "@/reducers/ListReducer"
import { Item } from "@/types/Item"
import { useReducer, useState } from "react"

const Page = () => {
  const [list, dispatch] = useReducer(ListReducer, [])
  const [addField, setAddField] = useState('')

  const handleAddButton = () => {
    if(addField.trim() === '') return false
    
    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    })

    setAddField('')
  }

  const handleToggleDone = () => {
    dispatch({
      type: 'toggleDone',
      payload: { id: 2 }
    })
  }

  const handleEditText = () => {
    dispatch({
      type: 'editText',
      payload: { id: 2, newText: 'Bla bla' }
    })
  }

  const handleDelete = () => {
    dispatch({
      type: 'remove',
      playload: { id: 2 }
    })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>

      <div className="max-w-2xl mx-auto flex rounded-md border bg-gray-900 border-gray-400 p-4 my-4">
        <input 
          type="text" 
          placeholder="Digite um item"
          className="flex-1 rounded-md border border-whit p-3 bg-transparent text-white outline-none" 
          value={ addField }
          onChange={ e => setAddField(e.target.value) } />

        <button 
          className="p-4 cursor-pointer"
          onClick={ handleAddButton }>
          Adicionar
        </button>
      </div>

      <ul>
        { list.map(item => (
          <li key={ item.id }> { item.text } </li>
        )) }
      </ul>
    </div>
  )
}

export default Page