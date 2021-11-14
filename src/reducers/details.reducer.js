
const initialState ={
    userLoginData:{},
};

const detailsReducer = (state=initialState ,action) =>{
    console.log('first reducer --->',action);
    
    switch (action.type) {
        case 'SAVE_LOGIN_DATA':{
            return { 
                ...state,
                userLoginData: action.payload
            }
        }

        default:
           return state;
    }

    
}

export default detailsReducer;