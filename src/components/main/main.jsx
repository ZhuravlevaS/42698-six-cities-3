import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import SortedVariants from '../sorted-variants/sorted-variants.jsx';
import data from "../../mocks/dataCities.js";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setCitiesData(data);
  }

  render() {
    const {aparts, onMouseOut, onMouseOver, onCityClick, activePin, city} = this.props;
    const location = aparts.map((apart) => apart.location);
    const locationCity = aparts[0] ? aparts[0].city.location : null;
    const cityName = locationCity ? aparts[0].city.name : null;
    const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

    return (
      <div>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <div className="page page--gray page--main">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link header__logo-link--active">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <CitiesList cities={cities} onCityClick={onCityClick} aciveCity={city} />
              </section>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                {aparts.length > 0 &&
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{aparts.length} places to stay in {cityName}</b>

                    <SortedVariants
                      aparts={aparts}
                      onMouseOver={onMouseOver}
                      onMouseOut={onMouseOut}
                      city={city}
                    />
                  </section>
                }
                {aparts.length > 0 ||
                  <section className="cities__no-places">
                    <div className="cities__status-wrapper tabs__content">
                      <b className="cities__status">No places to stay available</b>
                      <p className="cities__status-description">We could not find any property availbale at the moment in {cityName}</p>
                    </div>
                  </section>
                }


                <div className="cities__right-section">
                  <section className="cities__map map" style={{backgroundImage: `none`}}>
                    <Map
                      city={locationCity}
                      cords={location}
                      activePin={activePin}
                    />
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
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
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  setCitiesData: PropTypes.func.isRequired,
  activePin: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number
  }),
  city: PropTypes.string.isRequired,
};

export default Main;
