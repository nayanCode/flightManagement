
const initialState={
    passengerDetails:[]
}

const infoReducer=(state=initialState,action)=>{
   
    switch (action.type) {
        case 'GET_INFO_DATA':
            return{ 
                ...state,
                passengerDetails:action.payload

            }
        default:
            return state;
    }
}
export default infoReducer;