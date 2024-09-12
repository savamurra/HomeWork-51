import './App.css';
import Numbers from './components/Number/Numbers.tsx';
import {useState} from "react";


const App = () => {
  const [num] = useState<number[]>([5, 11, 16 ,23, 32])

  const numbersFromArray = num.map((number, index) =>{
    return (
        <Numbers key = {index} number = {number}/>
    )
  })
  return (
      <>
        {numbersFromArray}
        <button className="random-btn" type="button">New Numbers</button>
      </>
  );
};

export default App;
