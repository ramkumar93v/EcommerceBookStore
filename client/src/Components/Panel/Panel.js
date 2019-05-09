import React from 'react';


const  Panel =(props)=> {


    return (

  <div className="container">
  <div className="panel panel-default">
    <div className="panel-heading">{props.lastName, props.firstName}</div>
    <div className="panel-body">Panel Content</div>
  </div>
  </div>

    )


  }


export default Panel
