import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import aparts from "./mocks/offers.js";
import propertyObj from "./mocks/property.js";

ReactDOM.render(
    <App aparts={aparts} apart={propertyObj}/>,
    document.querySelector(`#root`)
);
