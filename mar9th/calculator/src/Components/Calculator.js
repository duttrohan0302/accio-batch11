import React, { Component } from "react";
import Button from "./Button";
import Keypad from "./Keypad";
import Display from "./Display";
import "./Calculator.css";

const labels = ["C","7","4","1","0","/","8","5","2",".","x","9","6","3","","-"];
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate = () => {
    try {
      const result = eval(this.state.data);
      this.setState({ data: result });
    } catch (e) {
      this.setState({ data: "Error" });
    }
  };
  handleClick = (e) => {
    const value = e.target.getAttribute("data-value");

    switch (value) {
      case "C":
        this.setState({ data: "" });
        break;
      case "equal":
        this.calculate();
        break;
      default:
        this.setState({ data: this.state.data + value });
    }
  };
  render() {
    return (
      <div className="Calculator">
        <Display data={this.state.data} />
        <Keypad>
          {
            labels.map((buttonData)=>(<Button key={buttonData} onClick={this.handleClick} label={buttonData} value={buttonData} />))
          }
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" /> 
          {/* <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="x" value="*" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" /> 
          */}
        </Keypad>
      </div>
    );
  }
}

export default Calculator;
