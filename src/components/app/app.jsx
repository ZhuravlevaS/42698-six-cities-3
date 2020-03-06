import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      property: {}
    };

    this._handleCardMouseOver = this._handleCardMouseOver.bind(this);
    this._handleCardMouseOut = this._handleCardMouseOut.bind(this);
  }

  _handleCardMouseOver(prop) {
    if (this.state.property && this.state.property.id === prop.id) {
      return;
    }

    this.setState({
      property: prop
    });
  }

  _handleCardMouseOut() {
    this.setState({
      property: {}
    });
  }

  _renderMain() {
    const {citiesData, onCityClick, city, saveCitiesData} = this.props;
    const aparts = citiesData ? citiesData.filter((item) => item.city.name === city) : [];

    return (
      <Main
        aparts={aparts}
        city={city}
        onCityClick={onCityClick}
        onMouseOver={this._handleCardMouseOver}
        onMouseOut={this._handleCardMouseOut}
        saveCitiesData={saveCitiesData}
        activePin={this.state.property.location}
      />
    );
  }

  _renderOffer() {
    return <Property
      apart={this.props.apart}
      onMouseOver={this._handleCardMouseOver}
      onMouseOut={this._handleCardMouseOut}
      activePin={this.state.property.location}
    />;
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
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.exact({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.exact({
          avatarUrl: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          isPro: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired
        }),
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        location: PropTypes.exact({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }),
        maxAdults: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ),
  apart: PropTypes.exact(
      {
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.exact({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.exact({
          avatarUrl: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          isPro: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired
        }),
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        location: PropTypes.exact({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }),
        maxAdults: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }),
  onCityClick: PropTypes.func.isRequired,
  saveCitiesData: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  citiesData: PropTypes.arrayOf(PropTypes.exact(
      {
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.exact({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.exact({
          avatarUrl: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          isPro: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired
        }),
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        location: PropTypes.exact({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }),
        maxAdults: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }
  )
  )
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.getCity(city));
  },

  saveCitiesData(dataCities) {
    dispatch(ActionCreator.saveCitiesData(dataCities));
  }
});

export {App};
export default connect(
    (state) => ({
      city: state.city,
      citiesData: state.citiesData
    }),
    mapDispatchToProps
)(App);
