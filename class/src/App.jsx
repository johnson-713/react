import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NoPage from "./NoPage";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = () => {

  }

  const AppValue = {
    count, setCount,handleSubmit,
  }

  return (
    <AppContext.Provider value={AppValue}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
