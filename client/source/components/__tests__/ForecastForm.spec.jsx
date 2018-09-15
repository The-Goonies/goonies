import React from 'react';
import renderer from 'react-test-renderer';
import ForecastForm from '../presentational/ForecastForm';

test('App Renders correctly', () => {
  const component = renderer.create(< ForecastForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
