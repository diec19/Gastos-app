import {useGlobalState} from '../../context/GlobalState'

const TransactionList = () => {
    const {movimientos,deleteTrasaction} = useGlobalState();
  return (
    <div>
        


        <h2>Transacciones</h2>
        <hr/>

        {
            movimientos.map((p)=>(
                <div key={p.id}>
                    <p>{p.description}</p>
                    <span>{p.amount}</span>
                    <button onClick={()=>deleteTrasaction(p.id)}
                    >Delete</button>
                    <hr/>
                </div>
            ))
        }
    </div>
  )
}

export default TransactionList