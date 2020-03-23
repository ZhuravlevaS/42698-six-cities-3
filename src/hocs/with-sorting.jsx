import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withSortingVar = (Component, SortType) => {
  class withSorting extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        aparts: props.aparts
      };
    }

    sortAparts() {
      this.setState({
        aparts: this.props.sortType === SortType.default
          ? this.props.aparts
          : [...this.props.aparts].sort(SortType[this.props.sortType])
      });
    }

    componentDidUpdate(prevProps) {
      debugger
      if (prevProps.sortType !== this.props.sortType || prevProps.city !== this.props.city) {
        this.sortAparts();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          aparts={this.state.aparts}
        />
      );
    }
  }

  withSorting.propTypes = {
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
          amenities: PropTypes.arrayOf(PropTypes.string),
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
    sortType: PropTypes.string,
    city: PropTypes.string,
  };

  return withSorting;
};

export default withSortingVar;
