import React, { useState } from "react";
import Error from "../error/Error";

const Form = ({saveCalled}) => {
  
    const [search, saveSearch] = useState({
        city: "",
        country: "",
      });

  const [error, saveError] = useState(false);

  const handleChange = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.city.trim() === "" || search.country.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);
    return saveCalled(search);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {error ? (
        <Error message='All field are required'></Error>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={search.city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="US">USA</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>

      <div className="input-field col s12">
        <button
          type="submit"
          style={{color: 'black'}}
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
