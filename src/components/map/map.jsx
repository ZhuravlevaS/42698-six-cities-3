import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const Icon = {
  iconUrl: `img/pin.svg`,
  iconSizes: [30, 40]
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = undefined;
    this.isMapInit = false;
  }

  initMap(city, cords) {
    if (this.isMapInit) {
      this.map.remove();
    }

    const icon = leaflet.icon(Icon);
    const {latitude, longitude, zoom} = city;
    const cityCords = [latitude, longitude];
    this.map = leaflet.map(`map`, {
      center: cityCords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCords, zoom);

    cords.forEach((element) => {
      leaflet.marker([element.latitude, element.longitude], {icon}).addTo(this.map);
    });

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    this.isMapInit = true;
  }

  componentDidMount() {
    const {city, cords} = this.props;

    try {
      if (city) {
        this.initMap(city, cords);
      }
    } catch (e) {
      return e;
    }

    return true;
  }

  componentDidUpdate(prevProps) {
    if (this.props.city &&
      this.props.city.latitude !== prevProps.city.latitude &&
      this.props.city.longitude !== prevProps.city.longitude) {
      const {city, cords} = this.props;

      this.initMap(city, cords);
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return (
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  city: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  cords: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }))
};

export default Map;
