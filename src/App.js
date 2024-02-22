import "./App.css";
import { Person } from "./components/Person";

function App() {

  return (
    <div className="App">
      <Person
        name="John"
        email="johnemail@gmail.com"
        age={25}
        isMarried={true}
        friends={["Jane", "James", "Jack"]}
      />
    </div>
  );
}

export default App;