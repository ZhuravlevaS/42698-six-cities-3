import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import Aparts from "./mocks/offers.js";

ReactDOM.render(
    <App aparts={Aparts}/>,
    document.querySelector(`#root`)
);
