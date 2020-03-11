import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  _renderMain() {
    const {citiesData, onCityClick, city, setCitiesData} = this.props;
    const aparts = citiesData ? citiesData.filter((item) => item.city.name === city) : [];

    return (
      <Main
        aparts={aparts}
        city={city}
        onCityClick={onCityClick}
        setCitiesData={setCitiesData}
      />
    );
  }

  _renderOffer() {
    return <Property
      apart={this.props.apart}
      activePin={this.props.apart.location}
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
        location: PropTypes.shape({
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
  setCitiesData: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  hoverProperty: PropTypes.exact(
      {
        bedrooms: PropTypes.number,
        city: PropTypes.exact({
          location: PropTypes.exact({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
            zoom: PropTypes.number,
          }),
          name: PropTypes.string,
        }),
        description: PropTypes.string,
        goods: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.exact({
          avatarUrl: PropTypes.string,
          id: PropTypes.number,
          isPro: PropTypes.bool,
          name: PropTypes.string
        }),
        id: PropTypes.number,
        images: PropTypes.arrayOf(PropTypes.string),
        isFavorite: PropTypes.bool,
        isPremium: PropTypes.bool,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          zoom: PropTypes.number
        }),
        maxAdults: PropTypes.number,
        previewImage: PropTypes.string,
        price: PropTypes.number,
        rating: PropTypes.number,
        title: PropTypes.string,
        sortType: PropTypes.string,
        type: PropTypes.string
      }),
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
        location: PropTypes.shape({
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
    dispatch(ActionCreator.setCity(city));
  },

  setCitiesData(dataCities) {
    dispatch(ActionCreator.setCitiesData(dataCities));
  },

});

export {App};
export default connect(
    (state) => ({
      city: state.city,
      citiesData: state.citiesData,
    }),
    mapDispatchToProps
)(App);
