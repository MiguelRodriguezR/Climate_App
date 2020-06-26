import React from "react";

const Climate = ({ result }) => {
  const { name, main } = result;
  return name ? (
    <div className="card-pannel white col s12">
      <div className="black-text">
        <h2> Weather at {name} is</h2>
        <p className="temperatura">
          {parseFloat(main.temp - 273.15, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p> Max Temperature:
          {parseFloat(main.temp_max - 273.15, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p>Min Temperature:
          {parseFloat(main.temp_min - 273.15, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  ) : null;
};

export default Climate;
