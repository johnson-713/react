import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NoPage from "./NoPage";
import { QueryClient, QueryClientProvider } from "react-query";
import Weather from "./Weather";

const queryclient = new QueryClient()

function App() {
  // const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryclient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
