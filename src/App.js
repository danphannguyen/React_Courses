import './App.css';
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const removeCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }


  return (
    <div className="App">
      <button onClick={addCount}>Increase</button>
      <button onClick={removeCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>

      {count}
    </div>
  );
}

export default App;
