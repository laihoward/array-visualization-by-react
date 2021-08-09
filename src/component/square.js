import React from 'react';
import "./square.css"

function Bar({data,num}) {
    return (
      <div>
        <div className="bar" >{data}</div>
        <div>{num}</div>
      </div>
      

      
    )
  }
  export default Bar;