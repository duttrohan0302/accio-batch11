import React, { useState } from "react";
import Button from "./Button";
import Keypad from "./Keypad";
import Display from "./Display";
import "./Calculator.css";

const labels = ["C","7","4","1","0","/","8","5","2",".","*","9","6","3","","-"];
const Calculator = () => {

  const [data,setData] = useState('')

  const calculate = () => {
    try {
      console.log(data)
      const result = eval(data);
      setData(result);
    } catch (e) {
      setData("Error");
    }
  };
  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");

    switch (value) {
      case "C":
        setData("")
        break;
      case "equal":
        calculate();
        break;
      default:
        setData(data+value)
    }
  };
    return (
      <div className="Calculator">
        <Display data={data} />
        <Keypad>
          {
            labels.map((buttonData)=>(<Button key={buttonData} onClick={handleClick} label={buttonData} value={buttonData} />))
          }
          <Button onClick={handleClick} label="+" size="2" value="+" />
          <Button onClick={handleClick} label="=" size="2" value="equal" /> 
        </Keypad>
      </div>
    );
}

export default Calculator;
