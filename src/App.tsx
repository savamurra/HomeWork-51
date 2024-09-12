import './App.css';
import Numbers from './components/Number/Numbers.tsx';
import {useState} from 'react';


const App = () => {
  const [num, setNum] = useState<number[]>([5, 11, 16 ,23, 32])

  const randomNumber = (): void => {
    let array: number[] = [];
    let countCycles = 0;

    for (let i = 5; i <= 36; i++)
      array.push(i);
    console.log(array);

    let newArrayWithRandomNumber: number[] = [];

    for (countCycles = 1; countCycles <= 5; countCycles++){
      let numberIndex = array.splice(Math.random()*array.length, 1)[0];
      newArrayWithRandomNumber.push(numberIndex);
    }
    setNum(newArrayWithRandomNumber);
  }

  const numbersFromArray = num.map((number, index) =>{
    return (
        <Numbers key = {index} number = {number}/>
    )
  })
  return (
      <>
        {numbersFromArray}
        <button onClick={randomNumber} className="random-btn" type="button">New Numbers</button>
      </>
  );
};

export default App;
