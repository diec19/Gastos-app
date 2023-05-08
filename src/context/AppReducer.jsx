export default (state, action)=>{
    switch(action.type){





        case "ADD_TRANSACTION":
            return {
                ...state,
                movimientos:[...state.movimientos,action.payload],

            }
            case "DELETE_TRANSACTION":
                return {
                    ...state,
                    movimientos: state.movimientos.filter(
                        (t)=>t.id !== action.payload
                    )
                }    
            
        default:
            return state    
    }
}