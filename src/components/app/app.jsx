import React from "react";
import Main from "../main/main.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {aparts} = props;

  return (
    <Main aparts={aparts}/>
  );
};

App.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.exact(
      {
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isMarked: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      })
  )
};

export default App;
