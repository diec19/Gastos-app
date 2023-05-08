import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

const IncomeExpenses = () => {

const {movimientos}=useGlobalState()

const amounts=movimientos.map((p)=>p.amount);

const ingresos=amounts
      .filter((item)=>item>0)
      .reduce((acc,item)=>(acc+=item),0);

const egresos=amounts
      .filter((item)=>item<0)
      .reduce((acc,item)=>(acc+=item),0) *-1;      


  return (
   <>
   
   
   <div className='flex justify-between my-2'>
      <h4>Ingresos</h4>
       <p>{ingresos}</p>

   </div>
   <div  className='flex justify-between my-2'>
      <h4>Egresos</h4>   
      <p>{egresos}</p>

   </div>
   
   </>
  )
}

export default IncomeExpenses