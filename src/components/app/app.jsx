import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {aparts} = props;

  return (
    <Main aparts={aparts}/>
  );
};

export default App;
