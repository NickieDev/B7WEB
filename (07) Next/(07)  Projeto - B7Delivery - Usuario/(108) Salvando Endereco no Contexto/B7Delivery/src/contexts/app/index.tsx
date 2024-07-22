import { createContext } from "react"
import { reducer } from "./reducer"
import { ContextType, DataType, ProviderType } from "./types"
import { useReducer } from "react"

export { useAppContext } from './hook'

const initialState: DataType = {
   tenant: null,
   shippingAddress: null,
   shippingPrice: 0
}

export const AppContext = createContext<ContextType>({
   state: initialState,
   dispatch: () => {  }
})

export const Provider = ({ children }: ProviderType) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   const value = { state, dispatch }

   return(
      <AppContext.Provider value={ value }>
         { children }
      </AppContext.Provider>
   )
}