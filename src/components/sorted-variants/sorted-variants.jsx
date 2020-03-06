import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
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

class SortedVariants extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      aparts: props.aparts,
      sortType: `popular`
    };

    this._handleSelectSortType = this._handleSelectSortType.bind(this);
  }

  _handleSelectSortType(value) {
    this.setState({sortType: value}, this.sortAparts);
  }

  sortAparts() {
    this.setState({
      aparts: this.state.sortType === `popular`
        ? this.props.aparts
        : [...this.props.aparts].sort(SortType[this.state.sortType])
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.aparts !== this.props.aparts) {
      this.setState({aparts: this.props.aparts});
    }
  }

  render() {
    const {onMouseOver, onMouseOut} = this.props;

    return (
      <React.Fragment>
        <SortedForm
          onSelectSortType={this._handleSelectSortType}
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
};

export default SortedVariants;
