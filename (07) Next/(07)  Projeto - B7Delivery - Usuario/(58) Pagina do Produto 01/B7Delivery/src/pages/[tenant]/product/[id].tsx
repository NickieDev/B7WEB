import styles from '@/styles/Product-id.module.css'
import '@/app/globals.css'
import { useApi } from '@/libs/useApi'
import { GetServerSideProps } from 'next'
import { useAppContext } from '@/contexts/AppContext'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import Head from 'next/head'

const ProductItem = (data: Props) => {
   const { tenant, setTenant } = useAppContext()

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
   }, [])

   return(
      <div className={ styles.container }>
         <Head>
            <title>{ data.product.name } | { data.tenant.name }</title>
         </Head>
      </div>
   )
}

export default ProductItem

type Props = {
   tenant: Tenant
   product: Product
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug, id } = context.query
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

   // Get Products
   const product = await api.getProduct(id as string)

   return{
      props: {
         tenant,
         product
      }
   }
}