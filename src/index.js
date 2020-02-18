import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import Aparts from "./mocks/offers.js";
import PropertyObj from "./mocks/property.js";

ReactDOM.render(
    <App aparts={Aparts} apart={PropertyObj}/>,
    document.querySelector(`#root`)
);
