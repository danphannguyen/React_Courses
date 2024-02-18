import "./App.css";
import { useCount }  from "./useCount";



function App() {

  const { count, increase, decrease, reset } = useCount(10);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} >Decrease</button>
      <button onClick={reset} >Reset</button>
    </div>
  );
}

export default App;