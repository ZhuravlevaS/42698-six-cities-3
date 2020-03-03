import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';
import offers from '../../mocks/offers.js';


it(`<Main/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();
  const onCityClick = jest.fn();
  const saveCitiesData = jest.fn();
  const cityCords = [52.38333, 4.9];
  const city = `Amsterdam`;

  const tree = renderer
    .create(<Main
      aparts={offers}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      cityCords={cityCords}
      city={city}
      onCityClick={onCityClick}
      saveCitiesData={saveCitiesData}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
