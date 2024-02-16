import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Navbar } from "./pages/navbar";


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;