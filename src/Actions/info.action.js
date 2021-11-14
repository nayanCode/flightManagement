import axios from 'axios';

export const getInfo=()=>{
    return async (dispatch)=>{

        let infoData = await axios.get('http://localhost:9000/PassengerDetails');
        dispatch(dispatchInfoData(infoData));

    }
}

const dispatchInfoData=(data)=>{
    return {
        type:'GET_INFO_DATA',
        payload:data
    }
}