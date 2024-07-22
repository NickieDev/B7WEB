import { MyButton } from '@/components/MyButton'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'
import styles from '../../../styles/Sobre.module.css'

type Props = {
   nome: string
}

const Sobre = ({ nome }: Props) => {
   const [contador, setContador] = useState(19)

   const handleContadorBtn = () => {
      setContador(contador + 1)
   }

   return(
      <div>
         <h1 className={ styles.sobreTitle }>Sobre ({contador})</h1>

         <p>O nome em 'NEXT_PUBLIC_NOME' é: { process.env.NEXT_PUBLIC_NOME }</p>
         <p>O nome é { nome }</p>

         <ul>
            <li> 
               <Link 
                  // href="/sobre/Nick"
                  href={{
                     pathname: '/sobre/[slug]',
                     query:  { slug: 'nick' }
                  }}
                  // replace => não armazena historico
               >Nick</Link> 
            </li>
            <li> <Link href="/sobre/Tonhao">Tonhao</Link> </li>
         </ul>

         {/* <button onClick={ handleContadorBtn }>Aumentar</button> */}

         <MyButton 
            label='Aumentar'
            onClick={ handleContadorBtn } />
      </div>
   )
} 

// Aqui renderiza no servidor
export const getStaticProps = () => {
   return {
      props: {
         nome: process.env.NOME
      }
   }
}

export default Sobre
