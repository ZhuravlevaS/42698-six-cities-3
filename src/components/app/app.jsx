import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMain() {
    const {aparts} = this.props;

    return (
      <Main aparts={aparts}/>
    );
  }

  render() {
    const {apart} = this.props;

    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-offer">
            <Property apart={apart} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
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
        isPremium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      })
  ),
  apart: PropTypes.exact({
    imgs: PropTypes.arrayOf(PropTypes.exact(
      {
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
    ),
    insides: PropTypes.arrayOf(PropTypes.exact(
      {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
    ),
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isMarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }),
};

export default App;
