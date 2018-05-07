import React from 'react';
import {Provider} from 'react-redux';
import {render} from "react-dom";

import App from './container/App';

import store from './Store'


// const myLogger=(store) => (next) => (action) =>{
//     // console.log("log action",action);
//     next(action);                                   //if we dont write this line the action is not supplied to reducer it stopes here it self  
// };

// store.subscribe(()=> {
// //  console.log("store updated", store.getState());
// });
// store.dispatch({
//     type : 'ADD',
//     payload : 100 
// });
render(
<Provider store={store}>
<App/>
</Provider>,   window.document.getElementById('root'));

