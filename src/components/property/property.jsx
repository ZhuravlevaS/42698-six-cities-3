import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Operation as StateOperation} from "../../reducer/state/state.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {AppRoute} from "../../const.js";

import PropertyGallery from "../property-gallery/property-gallery.jsx";
import ReviewList from '../review-list/review-list.jsx';
import Map from '../map/map.jsx';
import CardList from '../card-list/card-list.jsx';
import Header from '../header/header.jsx';
import FeedbackForm from '../feedback-form/feedback-form.jsx';
import withSendingReview from '../../hocs/with-sending-feedback.jsx';

const FeedbackFormSending = withSendingReview(FeedbackForm);

class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = {
      id: this.props.match.params.id
    };

    this.props.loadHotels(data);
    this.props.loadReviews(data);
  }

  getApart() {
    let {id} = this.props.match.params;
    return this.props.aparts.find((el) => parseInt(el.id, 10) === parseInt(id, 10));
  }

  sendFavorit(data) {
    this.props.setFavorite(data);
  }

  render() {
    const apart = this.getApart();
    if (!apart) {
      return null;
    }
    const {images, price, rating, title, type, isFavorite, isPremium, bedrooms, maxAdults, goods, host, city, description, id} = apart;
    const data = {
      id,
      status: isFavorite
    };
    const ratingRound = Math.round(rating);
    const ratingComa = rating.toString().replace(/\./g, `,`);

    return (
      <React.Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <div className="page">
          <Header/>

          <main className="page__main page__main--property">
            <section className="property">
              <PropertyGallery images={images} />

              <div className="property__container container">
                <div className="property__wrapper">
                  {isPremium &&
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  }
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>
                    <button className={`property__bookmark-button button${isFavorite ? ` property__bookmark-button--active` : ``}`} type="button" onClick={() => this.sendFavorit(data)}>
                      <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${ratingRound * 20}%`}}/>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{ratingComa}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {maxAdults} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {
                        goods.map((good) => {
                          return <li className="property__inside-item" key={good}>
                            {good}
                          </li>;
                        })
                      }
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                        <img className="property__avatar user__avatar" src={AppRoute.ROOT + host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                      </div>
                      <span className="property__user-name">
                        {host.name}
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {description}
                      </p>
                    </div>
                  </div>

                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{this.props.reviews ? this.props.reviews.length : 0}</span></h2>
                    {
                      this.props.reviews.length > 0 &&
                      <ReviewList reviews= {this.props.reviews}/>
                    }
                    {
                      this.props.authStat === `AUTH` &&
                      <FeedbackFormSending id={id}/>
                    }
                  </section>

                </div>
              </div>
              { this.props.hotelsNearby.length > 0 &&
                <section className="property__map map">
                  <Map city={city.location} aparts={[apart, ...this.props.hotelsNearby]} activePin={apart}/>
                </section>
              }

            </section>
            { this.props.hotelsNearby.length > 0 &&
              <div className="container">
                <CardList aparts={this.props.hotelsNearby} typesClass={[`near-places__list`, `near-places__card`]}/>
              </div>
            }

          </main>
        </div>
      </React.Fragment>
    );
  }
}

Property.propTypes = {
  match: PropTypes.object,
  aparts: PropTypes.arrayOf(PropTypes.shape({
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
  authStat: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string
    })
  })
  ),
  loadHotels: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
  hotelsNearby: PropTypes.arrayOf(PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }),
      name: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
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
    type: PropTypes.string.isRequired,
  })
  )
};

const mapStateToProps = (state) => ({
  authStat: state.USER.authorizationStatus,
  reviews: state.STATE.feedbacks,
  hotelsNearby: state.DATA.hotelsNearby,
  aparts: state.DATA.offersData
});

const mapDispatchToProps = (dispatch) => ({
  loadHotels(data) {
    dispatch(DataOperation.loadHotelsNearby(data));
  },
  loadReviews(data) {
    dispatch(StateOperation.getReviews(data));
  },
  setFavorite(data) {
    dispatch(DataOperation.setFavorite(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Property);
