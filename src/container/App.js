import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import User  from '../components/User';
import Main  from '../components/Main';
class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Main changeUsername={()=> this.props.setName("faizan")}/>
                <User username={this.props.user}/>
            </div>
        );
    }
}
const mapStateToProps =(state) =>{//means which props of my globle state do i want to use in this compnent and then to which local prop in this component  i want to map
return{
user: state.userReducer,
math: state.mathReducer
};
}; 
const mapDispatchToProps =(dispatch) =>{//means which props of my globle state do i want to use in this compnent and then to which local prop in this component  i want to map
    return{
    setName:(name) => {
        dispatch({  
            type:"SET_NAME",
            payload: name
        });
    }
    };
    }; 
    export default connect(mapStateToProps,mapDispatchToProps)(App);




