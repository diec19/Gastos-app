import {useGlobalState} from "../context/GlobalState"

const Balance = () => {
  const {movimientos} = useGlobalState();
  const monto = movimientos.map(mov=>mov.amount)
   const total = monto.reduce((acc,item)=>(acc+=item),0)
  return (
    <div className="flex justify-between">    
      <p>Tu Balance </p>  
           <h1 className="text-2x1 font-bold">${total}</h1>
    </div>
  )
}

export default Balance