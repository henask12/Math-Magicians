import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display"><span>0</span></div>
      <div className="buttons">
        <button className="button row" type="button">AC</button>
        <button className="button row" type="button">+/-</button>
        <button className="button row" type="button">%</button>
        <button className="button row orange" type="button">/</button>
        <button className="button row" type="button">7</button>
        <button className="button row" type="button">8</button>
        <button className="button row" type="button">9</button>

        <button className="button row orange" type="button">*</button>
        <button className="button row" type="button">4</button>
        <button className="button row" type="button">5</button>
        <button className="button row" type="button">6</button>
        <button className="button row orange" type="button">-</button>
        <button className="button row" type="button">1</button>
        <button className="button row" type="button">2</button>
        <button className="button row" type="button">3</button>
        <button className="button row orange" type="button">+</button>
        <button className="button row two" type="button">0</button>
        <button className="button row" type="button">.</button>
        <button className="button row orange" type="button">=</button>
      </div>

    </div>
  );
}

export default Calculator;
