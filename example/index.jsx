import React, {Component} from 'react';
import ReactDom from 'react-dom';
// import { CustomAlert } from '../src/index.jsx'
import cpLib from 'react-cplib';
import 'react-cplib/lib/index.min.css';
const { CustomAlert, CustomBtn} = cpLib;
class App extends Component{
  render(){
    console.log(cpLib);
     return (
       <div>
         <CustomAlert message="test"/>
       </div>
     )
  }
}
ReactDom.render(<App/>,document.getElementById('app'))
