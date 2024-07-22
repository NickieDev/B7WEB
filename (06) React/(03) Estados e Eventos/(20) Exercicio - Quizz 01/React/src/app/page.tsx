'use client'

import { Questions } from "@/data/Questions"
import { useState } from "react"

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const title = 'Quizz de Culinária'

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">
          { title }
        </div>

        <div className="p-5">
          **
        </div>

        <div className="p-5 text-center border-t border-gray-300">
          { currentQuestion + 1 } de { Questions.length } pergunta{ Questions.length === 1 ? '' : 's' }
        </div>
      </div>
    </div>
  )
}

export default Page