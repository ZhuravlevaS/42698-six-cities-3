import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = undefined;
    this.isMapInit = false;
    this.isActive = false;
    this.markers = [];
  }

  renderMarkers(aparts) {
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
    
    aparts.forEach((element) => {
      if (this.props.hoverProperty.id === element.id) {
        this.addMarker([element.location.latitude, element.location.longitude], iconActive);
      } else {
        this.addMarker([element.location.latitude, element.location.longitude], icon);
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

  initMap(aparts) {
    if (this.isMapInit) {
      this.map.remove();
    }

    const city = aparts[0] ? aparts[0].city.location : null;
    const {latitude, longitude, zoom} = city;
    const cityCords = [latitude, longitude];

    this.map = leaflet.map(`map`, {
      center: cityCords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCords, zoom);

    this.renderMarkers(aparts);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    this.isMapInit = true;
  }

  componentDidMount() {
    const {aparts} = this.props;

    try {
      if (aparts) {
        this.initMap(aparts);
      }
    } catch (e) {
      console.error(e)
    }

    return true;
  }

  componentDidUpdate(prevProps) {
    const {aparts} = this.props;

    if (aparts[0].city.name !== prevProps.aparts[0].city.name) {
      this.initMap(aparts);
    }

    if (this.props.hoverProperty.id !== prevProps.hoverProperty.id) {
      const cords = prevProps.aparts.map((apart) => apart.location);
      this.clearMarkers(cords);
      this.renderMarkers(aparts);
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

export default connect(
  (state) => ({
    hoverProperty: state.hoverProperty,
  })
)(Map);
