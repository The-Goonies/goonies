import React from 'react';
import renderer from 'react-test-renderer';
import MapYourRoute from '../presentational/MapYourRoute';

test('App Renders correctly', () => {
  const component = renderer.create(<MapYourRoute />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
