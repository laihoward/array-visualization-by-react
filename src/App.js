  
import React from 'react';
import './App.css';
import {Input} from 'antd';
import Bar from './component/square'
import BubbleSort from './algorithms/bubbleSort'

class App extends React.Component{
  state={
    array:[],
    inputValue:'',
    deletewarning:""
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
      array:newarray,
      deletewarning:''
    })
  }
  deleteDataBtn=()=>{
    if (this.state.inputValue==""){
      let x= "Enter the index of number and press delete botton again."
      this.setState({
        deletewarning:x
    })
    }
    else{
      let newarray = this.state.array.slice() ;
      let deleteindex = this.state.inputValue
      newarray.splice(deleteindex,1)
      this.setState({
        inputValue:'',
        array:newarray,
        deletewarning:''
    })
    }
  }

  clearDataBtn=()=>{
    let newarray = []
    this.setState({
      inputValue:'',
      array:newarray,
      deletewarning:''
    })
  }
  sortDataBtn=()=>{
    let array = this.state.array.slice();
    BubbleSort(array);
    this.setState({
      array:array,
      deletewarning:''
    })
  }
  render(){
      let circleDiv = this.state.array.map((value,index)=><Bar
      key={index}  
      data={value}
      num={index}
      />)
      return (
        <div className ="App">
          <h1>Array Implementaion</h1>
          <section>
            
              <Input
              className="inputData"
              value = {this.state.inputValue}
              onChange={this.handleInputChange} 
              />
              <button   
                  className="pushBtn Btn"
                  onClick={()=>this.pushDataBtn()}
              >Push</button>
              <button   
                  className="deleteBtn Btn normal"
                  onClick={()=>this.deleteDataBtn()}
              >Delete</button>
              <button 
                  className="clearBtn Btn normal"
                  onClick={()=>this.clearDataBtn()}
              >Clear</button>
              <button 
                  className="sortingBtn Btn normal"
                  onClick={()=>this.sortDataBtn()}
              >Sorting</button>
            
            
          </section>
          <section>
            <p className="warning">{this.state.deletewarning}</p>
          </section>
          <section className="circle card container">
            {circleDiv}
          </section>
        </div>
      )
  }
}
export default App;