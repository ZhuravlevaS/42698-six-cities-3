import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getFavoriteCities} from "../../reducer/data/selectors.js";
import Header from '../header/header.jsx';
import FavoriteItem from '../favorite-item/favorite-item.jsx';
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

class Favorite extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavorite();
  }

  render() {
    const {cities, aparts} = this.props;
    return (
      <React.Fragment>
        {
          this.props.aparts.length > 0 ?

            <div className="page">
              <Header/>

              <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                  <section className="favorites">
                    <h1 className="favorites__title">Saved listing</h1>
                    <ul className="favorites__list">
                      {
                        cities.map((city) => <FavoriteItem key={city} city={city} aparts={aparts}/>)
                      }
                    </ul>
                  </section>
                </div>
              </main>
              <footer className="footer container">
                <Link to={AppRoute.ROOT}>
                  <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
                </Link>
              </footer>
            </div>
            :
            <div className="page page--favorites-empty">
              <Header/>
              <main className="page__main page__main--favorites page__main--favorites-empty">
                <div className="page__favorites-container container">
                  <section className="favorites favorites--empty">
                    <h1 className="visually-hidden">Favorites (empty)</h1>
                    <div className="favorites__status-wrapper">
                      <b className="favorites__status">Nothing yet saved.</b>
                      <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                    </div>
                  </section>
                </div>
              </main>
              <footer className="footer">
                <Link to={AppRoute.ROOT}>
                  <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
                </Link>
              </footer>
            </div>
        }
      </React.Fragment>
    );
  }
}

Favorite.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.exact(
      {
        bedrooms: PropTypes.number.isRequired,
        city: PropTypes.exact({
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          }),
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string),
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
      })
  ),
  cities: PropTypes.arrayOf(PropTypes.string),
  loadFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  aparts: state.DATA.favorites,
  cities: getFavoriteCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorite() {
    dispatch(DataOperation.getFavorite());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
