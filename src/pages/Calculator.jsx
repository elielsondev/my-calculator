import React, { useState } from "react";
import "./style/Calculator.css";

function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operation, setOperation] = useState();

  function inputNum({ target: { value } }) {
    if (num === 0) {
      setNum(value);
    } else {
      setNum(num + value);
    }
  }

  function clear() {
    setNum(0);
  }

  function percentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-Math.abs(num));
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler ({ target: { value } }) {
    setOperation(value);
    setOldNum(num);
    setNum(0)
  }

  function calculate () {
    switch (operation) {
      case '/':
          setNum(oldNum / num);
      break;
      case 'X':
          setNum(oldNum * num);
      break;
      case '-':
          setNum(oldNum - num);
      break;
      case '+':
          setNum(parseFloat(oldNum) + parseFloat(num));
      break;
      default:
        setNum(0)
        break;
    }
  }

  return (
    <main className="Align">
      <div className="Calculator">
        <h1 className="Result">{num}</h1>
        <button className="ButtonGray" onClick={clear}>
          AC
        </button>
        <button className="ButtonGray" onClick={changeSign}>
          +/-
        </button>
        <button className="ButtonGray" onClick={percentage}>
          %
        </button>
        <input
          type="button"
          className="ButtonOrange"
          onClick={operatorHandler}
          value="/"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="7"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="8"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="9"
        />
        <input
          type="button"
          className="ButtonOrange"
          onClick={operatorHandler}
          value="X"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="4"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="5"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="6"
        />
        <input
          type="button"
          className="ButtonOrange"
          onClick={operatorHandler}
          value="-"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="1"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="2"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="3"
        />
        <input
          type="button"
          className="ButtonOrange"
          onClick={operatorHandler}
          value="+"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          id="Zero"
          onClick={inputNum}
          value="0"
        />
        <input
          type="button"
          className="ButtonGrayDark"
          onClick={inputNum}
          value="."
        />
        <button className="ButtonOrange" onClick={calculate}>=</button>
      </div>
    </main>
  );
}

export default Calculator;
