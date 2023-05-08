import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../../context/GlobalState';

const ExpenseChat = () => {

    const {movimientos} = useGlobalState();

   const total= movimientos.reduce((acc, movi)=>(acc+=movi.amount),0)
  return (
    <VictoryPie
   colorScale={["#e74c3c","#2ecc71"]}
    data={[
        {x:"Expenses",y: 35},
        {x: "Incomes", y: 40},
        
    ]}
    animate={{
      duration:200
    }}

    labels={({datum})=> `${datum.y}%`}
    labelComponent={<VictoryLabel
      angle={45}
      style={{
        fill:"white",

      }}
   /> }
    />
  )
}

export default ExpenseChat