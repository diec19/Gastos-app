import { useGlobalState } from '../context/GlobalState'


const Header = () => {
  const data = useGlobalState()
  return (

<>
    <div>Header</div>
    
</>
  )
}

export default Header