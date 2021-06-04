import React from 'react';
import './App.css';
import { Input,Button } from 'antd';
import Bar from './component/square'
class App extends React.Component{
  state={
    array:[7,5,12],
    inputValue:''
  }
  render(){
    let circleDiv = this.state.array.map((value,index)=><Bar
      key={index}  
      data={value}
    />)
    return(
      
      <div className ="App">
        <h1>array visualization</h1>
        <h2>push number between 0 to 99</h2>
        <section>
          <Input
            className="inputData"
            value={this.state.inputValue}
            // onChange={this.handleInputChange} 
          />
          <button   
              className="pushBtn"
              // onClick={this.changeToBubbleSort}
          >Push</button>
          <button 
              className="clearBtn"
              // onClick={this.changeToMergeSor}
          >Clear</button>
          <button 
              className="sortingBtn"
              // onClick={this.changeToQuickSort}
          >Sorting</button>
        </section>
        <section className="circle card container">
          {circleDiv}
        </section>
      </div>

    )
  }
}
export default App;
