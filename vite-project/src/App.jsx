import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const Num1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const Num2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  useEffect(()=>{
    const sum = num1 + num2; setResult(sum);
  }, [num1, num2]);

  return (
    <>
      <form>
        <div>
          <input type='number' value={num1} onChange={Num1Change}/>
        </div>
        <div>
          <input type='number' value={num2} onChange={Num2Change}/>
        </div>
        <h2>Hasil : {result}</h2>
      </form>
    </>
  )
}

export default App
