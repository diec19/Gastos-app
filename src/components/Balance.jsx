import {useGlobalState} from "../context/GlobalState"

const Balance = () => {

  const {movimientos} = useGlobalState();



  const monto = movimientos.map(mov=>mov.amount)


  const total = monto.reduce((acc,item)=>(acc+=item),0)
  return (
    <div>
      

      
      <p>Tu Balance ${total}</p>
      
      
    </div>
  )
}

export default Balance