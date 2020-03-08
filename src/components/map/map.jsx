import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = undefined;
    this.isMapInit = false;
    this.isActive = false;
    this.markers = [];
  }

  renderMarkers(cords) {
    if (this.markers.length > 0) {
      this.clearMarkers(this.markers);
    }

    const iconOptions = {
      iconUrl: `img/pin.svg`,
      iconSizes: [30, 40]
    };

    const iconActiveOptions = {
      iconUrl: `img/pin-active.svg`,
      iconSizes: [30, 30]
    };

    const icon = leaflet.icon(iconOptions);
    const iconActive = leaflet.icon(iconActiveOptions);

    cords.forEach((element) => {
      if (this.props.activePin &&
        this.props.activePin.latitude === element.latitude &&
        this.props.activePin.longitude === element.longitude) {

        this.addMarker([element.latitude, element.longitude], iconActive);
      } else {
        this.addMarker([element.latitude, element.longitude], icon);
      }
    });
  }

  addMarker(lonlat, icon) {
    const marker = leaflet.marker(lonlat, {icon}).addTo(this.map);
    this.markers.push(marker);
  }

  clearMarkers(markers) {
    if (this.map !== null) {
      markers.forEach((marker) => {
        this.map.removeLayer(marker);
      });
    }

    this.markers = [];
  }

  initMap(city, cords) {
    if (this.isMapInit) {
      this.map.remove();
    }

    const {latitude, longitude, zoom} = city;
    const cityCords = [latitude, longitude];

    this.map = leaflet.map(`map`, {
      center: cityCords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCords, zoom);

    this.renderMarkers(cords);

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
    const {city, cords} = this.props;

    if (this.props.city &&
      this.props.city !== prevProps.city) {

      this.initMap(city, cords);
    }

    if (this.props.activePin !== prevProps.activePin) {
      this.clearMarkers(prevProps.cords);
      this.renderMarkers(cords);
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
  })),
  activePin: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number
  })
};

export default Map;
