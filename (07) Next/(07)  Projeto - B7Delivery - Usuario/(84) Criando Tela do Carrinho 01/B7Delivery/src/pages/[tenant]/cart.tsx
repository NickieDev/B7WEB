import styles from '../../styles/Cart.module.css'
import '../../app/globals.css'
import { useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { useAppContext } from '@/contexts/app'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import { getCookie } from 'cookies-next'
import { User } from '@/types/User'
import { useAuthContext } from '@/contexts/auth'
import Head from 'next/head'
import { Header } from '@/components/Header'

const Cart = (data: Props) => {
   const { setToken, setUser } = useAuthContext()
   const { tenant, setTenant } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
      setToken(data.token)

      if(data.user) setUser(data.user)
   }, [])

   return(
      <div className={ styles.container }>
         <Head>
            <title>Sacola | { data.tenant.name }</title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.name }` }
            color={ data.tenant.mainColor }
            title='Sacola'
         />

         <div className={ styles.productsQuantity }>
            X itens
         </div>

         <div className={ styles.productsList}>
            
         </div>

      </div>
   )
}

export default Cart

type Props = {
   tenant: Tenant
   products: Product[]
   token: string
   user: User | null
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug } = context.query
   // console.log('Tenant: ', tenantSlug)

   const api = useApi(tenantSlug as string)

   // Get Tenant
   const tenant = await api.getTenant()

   if(!tenant) {
      // Verifica o Tenant e libera a aplicação caso ele for um Tenant esperado pela API
      return {
         redirect: {
            destination: '/',
            permanent: false
         }
      }
   }

   // Get Logged User
   // const token = context.req.cookies.token
   let token = getCookie('token', context)
   const user = await api.authorizeToken(token as string)

   if(!token) token = ''

   // Get Products
   const products = await api.getAllProduct()

   return{
      props: {
         tenant,
         products,
         user,
         token
      }
   }
}