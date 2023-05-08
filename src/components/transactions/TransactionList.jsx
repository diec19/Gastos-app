import {useGlobalState} from '../../context/GlobalState'
import TransactionItem from './TransactionItem'

const TransactionList = () => {
    const {movimientos} = useGlobalState();
  return (
    <div>
        <h2 className='text-slate-300 text-xl font-bold w-full'>Historial</h2>
         <ul>
        {
           
            movimientos.map((p)=>(
               <TransactionItem p={p} key={p.id}/>
            ))
            
        }
        </ul>
    </div>
  )
}

export default TransactionList