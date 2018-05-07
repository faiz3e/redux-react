const mathReducer = (state ={
    result :20,
    lastValues :[]
}, action )=>{
    switch (action.type){
        case 'ADD':
        state = { 
            ...state,
            result: state.result + action.payload
        };
        break;
        case 'SUB':
        state = { 
            ...state,
            result: state.result - action.payload
        };
        break;
        default:
        break;
    }
return state;
};
export default mathReducer;