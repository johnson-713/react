// import React from "react";
import './Card.css'

// eslint-disable-next-line react/prop-types
function Card({ image, name, age }) {
  return (
    <div className="card">
      <img src={image} alt="image" width={100} height={100} className='card-image' />
      <div className="card-text">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

export default Card;
