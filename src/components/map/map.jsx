import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const DEFAULT_ZOOM = 12;
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

    this.map = leaflet.map(`map`, {
      center: city,
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, DEFAULT_ZOOM);

    cords.forEach((element) => {
      leaflet.marker(element, {icon}).addTo(this.map);
    });

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    this.isMapInit = true;
  }

  componentDidMount() {
    const {city, cords} = this.props;

    try {
      if (city.length === 2) {
        this.initMap(city, cords);
      }
    } catch (e) {
      return e;
    }

    return true;
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city && this.props.city.length === 2) {
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
  city: PropTypes.arrayOf(PropTypes.number),
  cords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

export default Map;
