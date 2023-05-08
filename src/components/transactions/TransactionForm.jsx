import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'

const TransactionForm = () => {
  const {addTrasaction}=useGlobalState()


  const [description, setDescription] = useState()
  const [amount, setAmount] = useState(0)


  const submit =(e)=>{
    e.preventDefault()
    addTrasaction({
      id:window.crypto.randomUUID(),
      description,
      amount:+amount,
    })
    
  }
  return (
    <div>

    <form onSubmit={submit}>
      <input type="text" placeholder="ingrese un gasto"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <input type="number" step='0,01' placeholder='0.00' 
        onChange={(e)=>setAmount(e.target.value)}
      />

      <button>
        Añadir transaccion
      </button>

       </form>
      </div>

      
  )
}

export default TransactionForm