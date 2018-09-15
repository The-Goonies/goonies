import React from 'react';
import renderer from 'react-test-renderer';
import ParkInfo from '../presentational/ParkInfo';

test('App Renders correctly', () => {
  const component = renderer.create(<ParkInfo />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
