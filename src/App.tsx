import './App.css';
import Numbers from './components/Number/Numbers.tsx';
import {useState} from 'react';


const App = () => {
  const [num, setNum] = useState<number[]>([5, 11, 16 ,23, 32]);

  const randomNumber = (): void => {
    const array: number[] = [];
    let countCycles = 0;

    for (let i = 5; i <= 36; i++)
      array.push(i);

    const newArrayWithRandomNumber: number[] = [];

    for (countCycles = 1; countCycles <= 5; countCycles++){
      const numberIndex = array.splice(Math.random()*array.length, 1)[0];
      newArrayWithRandomNumber.push(numberIndex);
    }
    setNum(newArrayWithRandomNumber);
  };

  const numbersFromArray = num.map((number, index) =>{
    return (
        <Numbers key = {index} number = {number}/>
    );
  });
  return (
      <>
        <div className="container">
          <button onClick={randomNumber} className="random-btn" type="button">New Numbers</button>
          <div className="circleWraper">
            {numbersFromArray}
          </div>
        </div>
      </>
  );
};

export default App;
