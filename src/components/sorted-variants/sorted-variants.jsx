import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import SortedForm from '../sorted-form/sorted-form.jsx';
import CardList from '../card-list/card-list.jsx';

const SortType = {
  'to-high': (a, b) => {
    return a.price - b.price;
  },
  'to-low': (a, b) => {
    return b.price - a.price;
  },
  'top-rated': (a, b) => {
    return b.rating - a.rating;
  },
};
const DEUFAULT_TYPE = `popular`;

class SortedVariants extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      aparts: props.aparts
    };
  }

  sortAparts() {
    this.setState({
      aparts: this.props.sortType === DEUFAULT_TYPE
        ? this.props.aparts
        : [...this.props.aparts].sort(SortType[this.props.sortType])
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      if(this.props.sortType !== DEUFAULT_TYPE) {
        this.sortAparts();
      } else {
        this.setState({aparts: this.props.aparts});
      }     
    }

    if(prevProps.sortType !== this.props.sortType) {
      this.sortAparts();
    }
  }

  render() {
    const {onMouseOver, onMouseOut, setSortType} = this.props;

    return (
      <React.Fragment>
        <SortedForm
          onSelectSortType={setSortType}
        />

        <CardList
          aparts={this.state.aparts}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          typesClass={[`cities__places-list`, `cities__place-card`]}
        />

      </React.Fragment>
    );
  }
}

SortedVariants.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.shape(
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
  city: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setSortType(sortType) {
    dispatch(ActionCreator.setSortType(sortType));
  },
});

export {SortedVariants};
export default connect(
    (state) => ({
      sortType: state.sortType,
    }),
    mapDispatchToProps
)(SortedVariants);
