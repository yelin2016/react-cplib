import React from 'react';
export class CustomBtn extends React.Component{
  render(){
    const { name, className=""} = this.props;
     return (
       <div className={className}>
         <button>{name}</button>
       </div>
     )
  }
}
