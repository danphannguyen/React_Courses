import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Contact } from "./pages/contact";
import { Navbar } from "./pages/navbar";
import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {

  const client = new QueryClient({ defaultOptions: 
    { queries: { refetchOnWindowFocus: false } 
  } });
  const [username, setUsername] = useState("Derlax");

  return (
    <div className="App">

      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>

    </div>
  );
}

export default App;