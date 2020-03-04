import React from 'react';
import Map from './map.jsx';
import renderer from 'react-test-renderer';

const cityCords = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 10
};
const cords = [{
  latitude: 52.370216,
  longitude: 4.8965555168,
  zoom: 10
},
{
  latitude: 52.3705665216,
  longitude: 4.895168,
  zoom: 10
},
{
  latitude: 51.370216,
  longitude: 4.8,
  zoom: 10
}];

it(`<Map/> render`, () => {
  const tree = renderer
    .create(<Map city={cityCords} cords={cords}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
