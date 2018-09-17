import React from 'react';
import renderer from 'react-test-renderer';
import MapYourRoute from '../presentational/MapYourRoute';

test('MapYourRoute Renders correctly', () => {
  const component = renderer.create(<MapYourRoute />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
