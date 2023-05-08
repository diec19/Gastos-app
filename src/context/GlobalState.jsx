import {createContext,useContext,useReducer,useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState ={
    movimientos:[]
}
export const Context = createContext()

export const useGlobalState =()=>{
    const contexto = useContext(Context)
    return contexto
}

export const GlobalProvider = ({children}) =>{
    const [state,dispatch ] =useReducer(AppReducer,initialState,
        ()=>{
            const localData = localStorage.getItem("movimientos");
            return localData ? JSON.parse(localData) : initialState;
        }
        )

        useEffect(()=>{
            localStorage.setItem('movimientos',JSON.stringify(state))
        },[state])

    const addTrasaction=(transaccion)=>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload:transaccion
        })
        console.log(transaccion)
    }

    const deleteTrasaction=(id)=>{
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:id
        })
        
    }


    return (
        <Context.Provider value={{
            movimientos:state.movimientos,
            addTrasaction,
            deleteTrasaction,
            
            }}>
            {children}
        </Context.Provider>
    )
}