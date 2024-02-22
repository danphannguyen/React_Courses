import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name="John"
        age={30}
        email="john@gmail.com"
        isMarried={true}
        friends={["Jane", "Jack", "Jill"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
