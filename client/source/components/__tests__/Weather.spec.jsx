import React from 'react';
import renderer from 'react-test-renderer';
import Weather from '../presentational/Weather';

test('App Renders correctly', () => {
  const component = renderer.create(<Weather />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
