'use client' 

import Link from 'next/link'
import { navigationLinks } from '../../utils/data'
import styles from './NavBar.module.css'

// Para nova versão do Next
import { usePathname } from 'next/navigation'

export const NavBar = () => {
   // const router = useRouter()
   const pathName = usePathname()

   return(
      <ul className={ styles.container }>
         { navigationLinks.map((link, index) =>(
            <li key={ index } 
               // className={ pathName === link.path ? styles.linkActive : styles.linkItem }
               className={[
                  styles.linkItem,
                  pathName === link.path ? styles.linkActive : null
               ].join(' ')}
               >
               <Link href={ link.path }>{ link.label }</Link>
            </li>
         )) }
      </ul>
   )
}