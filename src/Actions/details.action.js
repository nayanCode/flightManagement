
export const saveLoginData=(userData)=>{
    console.log('first action----->',userData);
    return{ 
        type: 'SAVE_LOGIN_DATA',
        payload : userData
    }
}