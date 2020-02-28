import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {city, cords} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 40]
    });
    const zoom = 12;

    try {
      const map = leaflet.map(`map`, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });

      map.setView(city, zoom);

      cords.forEach((element) => {
        leaflet.marker(element, {icon}).addTo(map);
      });

      leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      }).addTo(map);

      return true;
    } catch (e) {
      return e;
    }
  }

  render() {
    return (
      <div id="map" style={{width: `100%`, height: `calc(100vh - 185px)`}}></div>
    );
  }
}

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number),
  cords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

export default Map;
