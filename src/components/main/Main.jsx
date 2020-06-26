import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import Climate from "../climate/Climate";
import Error from "../error/Error";

const Main = () => {
  const [called, saveCalled] = useState({});

  const [result, saveResult] = useState({});

  const [error, saveError] = useState(false);

  let errorComponent;

  const setErrorComponent = () => {
    errorComponent = error ? <Error message = 'No results'></Error> : <Climate result={result}></Climate>
  }

  useEffect(() => {
    const getApi = async () => {
      const appId = "14effbb18f11bb0f498e8ac9c9ee5d9c";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${called.city},${called.country}&appid=${appId}`;
      const response = await fetch(url);
      const result = await response.json();

      saveResult(result);
      saveError(result.cod === '404');
      
    };
    called.city ? getApi() : void 0;
  }, [called]);

  setErrorComponent();

  return (
    <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            <Form saveCalled={saveCalled}></Form>
          </div>
          <div className="col m6 s12">
            {errorComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
