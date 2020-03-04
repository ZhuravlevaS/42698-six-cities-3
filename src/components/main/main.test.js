import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';
import offers from '../../mocks/dataCities.js';


it(`<Main/> render`, () => {
  const onMouseOver = jest.fn();
  const onMouseOut = jest.fn();
  const onCityClick = jest.fn();
  const saveCitiesData = jest.fn();
  const city = `Amsterdam`;

  const tree = renderer
    .create(<Main
      aparts={offers}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      city={city}
      onCityClick={onCityClick}
      saveCitiesData={saveCitiesData}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
