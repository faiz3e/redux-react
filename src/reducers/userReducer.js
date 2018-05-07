const userReducer = (state ={
    name :  "noname yet ",
    sal : 0 
} , action )=>{
    switch (action.type){
        case 'SET_NAME':
        state = { 
            ...state,
           name: action.payload
        };
        break;
        case 'SET_SAL':
        state = { 
            ...state,
            sal: action.payload
        };
        break;
        default:
        break;
    }
return state;
};
export default userReducer;