import {} from "react";
import "./App.css";
import { data } from "./data";
import Card from "./Card";

function App() {

  const filteredData = data.filter((i) => i.age < 21)
  return (
    <div>
      {filteredData.map((i, ind) => (
        <Card key={ind} image={i.image} name={i.name} age={i.age} />
      ))}
    </div>
  );
}

export default App;
