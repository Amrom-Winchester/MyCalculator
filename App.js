import React from "react";
import Keypad from "./keyPad";
import Result from "./Answer";
import "./App.css";

class App extends React.Component{
  
  state = {
    initialOutput : "Write Something",
    mainOutput : "",
  }

  numberType = (e) => {
    this.setState({ initialOutput: this.state.mainOutput+e.currentTarget.innerText,
                    mainOutput: this.state.mainOutput+e.currentTarget.innerText,})
  }

  resultEval = (allinput) => {
    let lastDigit = allinput[allinput.length-1];
    if( lastDigit=='+' ||  lastDigit=='*' || lastDigit=='-' || lastDigit=='/'){
      console.log(allinput);
      this.setState({ initialOutput:"Invalid Expression" })
      return;
    }
    if( eval(allinput)!=NaN ){
      this.setState({ initialOutput: eval(allinput)})
    }
    else{
      this.setState({ initialOutput:"Invalid Expression" })
    }
  }

  render = () => {
    return(
      <div>
        <div className="output">{this.state.initialOutput}</div>
        <div className="Operators">
          <div className="MainOp"
            onClick = { (e)=>{
              this.setState({ initialOutput: this.state.mainOutput+e.currentTarget.innerText,
                mainOutput: this.state.mainOutput+e.currentTarget.innerText})
            }}>+</div>
          <div className="MainOp"
            onClick = { (e)=>{
              this.setState({ initialOutput: this.state.mainOutput+e.currentTarget.innerText,
                mainOutput: this.state.mainOutput+e.currentTarget.innerText})
            }}>-</div>
          <div className="MainOp"
            onClick = { (e)=>{
              this.setState({ initialOutput: this.state.mainOutput+e.currentTarget.innerText,
                mainOutput: this.state.mainOutput+e.currentTarget.innerText})
            }}>/</div>
          <div className="MainOp"
            onClick = { (e)=>{
              this.setState({ initialOutput: this.state.mainOutput+e.currentTarget.innerText,
                mainOutput: this.state.mainOutput+e.currentTarget.innerText})
            }}>*</div>
        </div>
        <Keypad numberType = {this.numberType}/>
        <Result resultEval = {this.resultEval} expression = {this.state.mainOutput}/>
        <button className="clear"
        onClick = { () => {
          this.setState({ initialOutput : "Write Something",
          mainOutput : "",})
        }}>Clear</button>
      </div>
    );
  }
}

export default App;
