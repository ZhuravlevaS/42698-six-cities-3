import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const aparts = [
  {
    img: `img/apartment-01.jpg`,
    price: `120`,
    rating: 4,
    description: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    isMarked: false,
    id: 1
  },

  {
    img: `img/room.jpg`,
    price: `80`,
    rating: 4,
    description: `Wood and stone place`,
    type: `Private room`,
    isMarked: true,
    id: 2
  },

  {
    img: `img/apartment-02.jpg`,
    price: `132`,
    rating: 4,
    description: `Canal View Prinsengracht`,
    type: `Apartment`,
    isMarked: false,
    id: 3
  },

  {
    img: `img/apartment-03.jpg`,
    price: `180`,
    rating: 5,
    description: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isMarked: false,
    id: 4
  },

  {
    img: `img/room.jpg`,
    price: `80`,
    rating: 4,
    description: `Wood and stone place`,
    type: `Private room`,
    isMarked: false,
    id: 5
  },
];

ReactDOM.render(
    <App aparts={aparts}/>,
    document.querySelector(`#root`)
);
