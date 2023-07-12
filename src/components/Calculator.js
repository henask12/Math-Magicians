import React, { useState } from 'react';
import './Calculator.css';
import CalculatorTitle from './CalculatorTitle';
import calculate from '../logic/calculate';
import Quote from './Quote';
import MathTitle from './HeaderMath';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    if (newData.total) {
      setDisplayValue(newData.total);
    } else if (newData.next) {
      setDisplayValue(newData.next);
    } else {
      setDisplayValue('0');
    }
  };
  return (
    <div className="container">
      <MathTitle />
      <div className="container-main">
        <div className="qoute-cont">
          <Quote />
        </div>
        <div className="container-calc">
          <CalculatorTitle />
          <div className="calculator">
            <div className="display"><span>{displayValue}</span></div>
            <div className="buttons">
              <button className="button row" type="button" onClick={() => handleClick('AC')}>AC</button>
              <button className="button row" type="button" onClick={() => handleClick('+/-')}>+/-</button>
              <button className="button row" type="button" onClick={() => handleClick('%')}>%</button>
              <button className="button row orange" type="button" onClick={() => handleClick('÷')}>÷</button>
              <button className="button row" type="button" onClick={() => handleClick('7')}>7</button>
              <button className="button row" type="button" onClick={() => handleClick('8')}>8</button>
              <button className="button row" type="button" onClick={() => handleClick('9')}>9</button>

              <button className="button row orange" type="button" onClick={() => handleClick('x')}>x</button>
              <button className="button row" type="button" onClick={() => handleClick('4')}>4</button>
              <button className="button row" type="button" onClick={() => handleClick('5')}>5</button>
              <button className="button row" type="button" onClick={() => handleClick('6')}>6</button>
              <button className="button row orange" type="button" onClick={() => handleClick('-')}>-</button>
              <button className="button row" type="button" onClick={() => handleClick('1')}>1</button>
              <button className="button row" type="button" onClick={() => handleClick('2')}>2</button>
              <button className="button row" type="button" onClick={() => handleClick('3')}>3</button>
              <button className="button row orange" type="button" onClick={() => handleClick('+')}>+</button>
              <button className="button row two" type="button" onClick={() => handleClick('0')}>0</button>
              <button className="button row" type="button" onClick={() => handleClick('.')}>.</button>
              <button className="button row orange" type="button" onClick={() => handleClick('=')}>=</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
