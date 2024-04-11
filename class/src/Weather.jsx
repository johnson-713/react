import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./Weather.css";

function Weather() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  console.log(data);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4e4c15cf0dabaf633c77ec38bddd52d6`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
    setLocation("");
  };

  return (
    <Container fluid className="weather">
      <Container className="d-flex justify-content-center">
        <input
          className="p-2 border-2 rounded mt-5"
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </Container>
      <Container className="d-flex flex-column justify-content-center text-center">
        {data?.name ? (
          <>
            <h3 className="mt-5">{data?.name}</h3>
            <h4 className="mt-1">{data?.main?.temp.toFixed()}&deg; C</h4>
          </>
        ) : null}
      </Container>

      <Container className="d-flex mt-5 justify-content-center align-content-center text-center">
        {data?.name ? (
          <>
            <h4 className="">{data?.main?.feels_like.toFixed()}&deg; C</h4>
            <h4 className="ps-5">{data?.main?.humidity.toFixed()} %</h4>
          </>
        ) : null}
      </Container>
    </Container>
  );
}

export default Weather;
