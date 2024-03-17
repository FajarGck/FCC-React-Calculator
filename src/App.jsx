import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('0');
  const [display, setDisplay] = useState('0');
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (value) => {
    const operators = ['+', '-', '/', '*'];

    if (operators.includes(value)) {
      const lastChar = input[input.length - 1];
      if (value === '-' && (input === '0' || operators.includes(lastChar))) {
        setInput(input + value)
      } else if(operators.includes(lastChar) && value !== '-') {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
    } else {
      if (input === '0' && value !== '.') {
        setInput(value);
      } else {
        setInput(input + value);
      }
      setIsClicked(false); 
    }
  };

  const calculate = () => {
    try {
      setDisplay(eval(input).toString());
    } catch (error) {
      setDisplay('error, please click AC')
      setInput('error, please click AC')
      console.log(error);
    }
  };

  const clear = () => {
    setInput('0');
    setIsClicked(false);
  };

  useEffect(() => {
      calculate();
  }, [isClicked]);

  return (
    <>
    <div className="identity">
        <span> Calculator by</span>
        <a href="https://github.com/FajarGck">Fajar Ramadhan</a>
      </div>
      <div className='container'>
        <div className="wrapper">
          <div className="calculator">
            <div id="display">
              <div id="input">
                {isClicked && <h5>{input}</h5>}
                {!isClicked && <h3>{input}</h3>}
              </div>
              <div id="result">
                {isClicked && <h3>{display}</h3>}
                {!isClicked && <h5>{display}</h5>}
              </div>
            </div>
            <div className="button">
              <button id='clear' onClick={clear}>AC</button>
              <button id='multiple' className='operators' onClick={() => handleClick('*')}>*</button>
              <button id='divide' className='operators' onClick={() => handleClick('/')}>/</button>
              <button id='one' className='number' onClick={() => handleClick('1')}>1</button>
              <button id='two' className='number' onClick={() => handleClick('2')}>2</button>
              <button id='three' className='number' onClick={() => handleClick('3')}>3</button>
              <button id='substract' className='operators' onClick={() => handleClick('-')}>-</button>
              <button id='four' className='number' onClick={() => handleClick('4')}>4</button>
              <button id='five' className='number' onClick={() => handleClick('5')}>5</button>
              <button id='six' className='number' onClick={() => handleClick('6')}>6</button>
              <button id='add' className='operators' onClick={() => handleClick('+')}>+</button>
              <button id='seven' className='number' onClick={() => handleClick('7')}>7</button>
              <button id='eight' className='number' onClick={() => handleClick('8')}>8</button>
              <button id='nine' className='number' onClick={() => handleClick('9')}>9</button>
              <button id='equal' className='operators' onClick={() => setIsClicked(true)}>=</button>
              <button id='zero' className='number' onClick={() => handleClick('0')}>0</button>
              <button id='decimal' className='number' onClick={() => handleClick('.')}>.</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
