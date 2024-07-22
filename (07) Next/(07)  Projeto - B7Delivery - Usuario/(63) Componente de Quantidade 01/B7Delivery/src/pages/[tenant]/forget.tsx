import styles from '../../styles/Forget.module.css'
import '../../app/globals.css'
import {  useAppContext } from '@/contexts/AppContext'
import { Tenant } from '@/types/Tenant'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useApi } from '@/libs/useApi'
import Head from 'next/head'
import { Header } from '@/components/Header'
import { InputField } from '@/components/InputField'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'

const Forget = (data: Props) => {
   const { tenant, setTenant } = useAppContext()
   const [email, setEmail] = useState('')

   useEffect(() => {
      // console.log(data.tenant)
      setTenant(data.tenant)
   }, [])

   const router = useRouter()

   const handleSubmit = () => {
      router.push(`/${ data.tenant.slug }/forget-success`)
   }

   return(
      <div className={ styles.container }>
         <Head>
            <title>Esqueci a senha | { data.tenant.name } </title>
         </Head>

         <Header 
            backHref={ `/${ data.tenant.slug }/login` }
            color={ data.tenant.mainColor }
         />

         <div className={ styles.header }>
            { data.tenant.name }
         </div>

         <div className={ styles.title }>
            Esqueceu sua senha
         </div>

         <div 
            className={ styles.subtitle }
            style={{ borderBottomColor: data.tenant.mainColor }}>
            Preencha o campo com seu email e receba as instruções para redefinir sua senha.
         </div>

         <div className={ styles.line }></div>

         <div className={ styles.formArea }>
            <div className={ styles.inputArea }>
               <InputField
                  color={ data.tenant.mainColor }
                  placeholder='Digite seu email'
                  value={ email }
                  onChange={ setEmail }
               />
            </div>

            <div className={ styles.inputArea }>
               <Button 
                  color={ data.tenant.mainColor }
                  label='Enviar'
                  onClick={ handleSubmit }
                  fill
               />
            </div>
         </div>
      </div>
   )
}

export default Forget
type Props = {
   tenant: Tenant
}

export const getServerSideProps: GetServerSideProps = async(context) => {
   const { tenant: tenantSlug } = context.query
   // console.log('Tenant: ', tenantSlug)

   const api = useApi()

   // Get Tenant
   const tenant = await api.getTenant(tenantSlug as string)

   if(!tenant) {
      // Verifica o Tenant e libera a aplicação caso ele for um Tenant esperado pela API
      return {
         redirect: {
            destination: '/',
            permanent: false
         }
      }
   }

   return{
      props: {
         tenant
      }
   }
}