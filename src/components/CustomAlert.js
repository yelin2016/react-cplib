import React from 'react';
import { Alert } from 'antd';
export class CustomAlert extends React.Component{
  render(){
    const { message= "",className=""} = this.props;
     return (
       <div className={className}>
         <Alert message={message}/>
       </div>
     )
  }
}
