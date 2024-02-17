import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/contact";
import { Navbar } from "./pages/navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {

  const [username, setUsername] = useState("Derlax");

  return (
    <div className="App">

      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>

    </div>
  );
}

export default App;