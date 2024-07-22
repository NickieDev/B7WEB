import { Princess_Sofia } from "next/font/google"
import { format } from "path"

export const useFormatter = () => ({
   formatPrice: (price: number) => {
      return price.toLocaleString('pr-br', {
         minimumFractionDigits: 2,
         style: 'currency',
         currency: 'BRL'
      })
   },
   
   formatQuantity: (qt: number, minDigits: number) => {
      if(qt.toString().length >= minDigits) return qt.toString()

      const remain = minDigits - qt.toString().length

      return `${ '0'.repeat(remain) }${ qt }`
   },

   formatDate: (date: string) => {
      return '---'
   }
})