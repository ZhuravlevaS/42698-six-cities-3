import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      property: {}
    };

    this.handleCardMouseOver = this.handleCardMouseOver.bind(this);
    this.handleCardMouseOut = this.handleCardMouseOut.bind(this);
  }

  handleCardMouseOver(prop) {

    if (this.state.property && this.state.property.id === prop.id) {
      return;
    }

    this.setState({
      property: prop
    });
  }

  handleCardMouseOut() {
    this.setState({
      property: {}
    });
  }

  _renderMain() {
    const {aparts} = this.props;

    return (
      <Main aparts={aparts} onMouseOver={this.handleCardMouseOver} onMouseOut={this.handleCardMouseOut}/>
    );
  }

  _renderOffer() {
    return <Property apart={this.props.apart} />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route path={`/dev-offer`}>
            {this._renderOffer()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.exact(
      {
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
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        isMarked: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        bedrooms: PropTypes.number.isRequired,
        adults: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        cords: PropTypes.arrayOf(PropTypes.number),
        host: PropTypes.exact({
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          isPro: PropTypes.bool.isRequired,
          description: PropTypes.arrayOf(PropTypes.exact(
              {
                text: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired
              })
          ),
        })
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
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isMarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    cords: PropTypes.arrayOf(PropTypes.number),
    host: PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      description: PropTypes.arrayOf(PropTypes.exact(
          {
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
          })
      ),
    })
  }),
};

export default App;
