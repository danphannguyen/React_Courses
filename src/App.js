import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";


function App() {

  const [excuse, setExcuse] = useState("");

  const generateExcuse = (category) => {
    let url = "https://excuser-three.vercel.app/v1/excuse/" + category;
    Axios.get(url).then((response) => {
      setExcuse(response.data[0].excuse);
    })
  }

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={ () => generateExcuse("party") }>Party</button>
      <button onClick={ () => generateExcuse("family") }>Family</button>
      <button onClick={ () => generateExcuse("office") }>Office</button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;