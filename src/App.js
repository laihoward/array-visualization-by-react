  
import React from 'react';
import './App.css';
import { Input} from 'antd';
import Bar from './component/square'
import BubbleSort from './algorithms/bubbleSort'

class App extends React.Component{
  state={
    array:[],
    inputValue:''
  }

  handleInputChange=(e)=>{
    this.setState({
      inputValue:e.target.value
    })
  }
  pushDataBtn=()=>{
    let newarray = this.state.array.slice() ;
    newarray.push(Math.floor(this.state.inputValue));
    this.setState({
      inputValue:'',
      array:newarray
    })
  }
  clearDataBtn=()=>{
    let newarray = []
    this.setState({
      inputValue:'',
      array:newarray
    })
  }
  sortDataBtn=()=>{
    let array = this.state.array.slice();
    BubbleSort(array);
    this.setState({
      array:array
    })
  }
  render(){
      let circleDiv = this.state.array.map((value,index)=><Bar
      key={index}  
      data={value}
      />)
      return (
        <div className ="App">
          <h1>array visualization</h1>
          <h2>push number between 0 to 99</h2>
          <section>
            
              <Input
              className="inputData"
              value = {this.state.inputValue}
              onChange={this.handleInputChange} 
              />
              <button   
                  className="pushBtn"
                  onClick={()=>this.pushDataBtn()}
              >Push</button>
              <button 
                  className="clearBtn"
                  onClick={()=>this.clearDataBtn()}
              >Clear</button>
              <button 
                  className="sortingBtn"
                  onClick={()=>this.sortDataBtn()}
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