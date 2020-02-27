import React from 'react';
import {connect} from "react-redux"
import {inc,dec} from './actions'
import './App.css';

function App({inc , dec , counter}) {
  
  return (
    <div className="App">
     <button onClick={()=>inc()} >+</button>
<span>{counter}</span>
     <button onClick={()=>dec()}>-</button>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    counter:state.counter
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      inc: ()=> dispatch(inc()),
      dec: ()=> dispatch(dec())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
