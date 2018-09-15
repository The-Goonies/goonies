import React from 'react';
import renderer from 'react-test-renderer';
import UserProfile from '../presentational/UserProfile';

test('App Renders correctly', () => {
  const component = renderer.create(<UserProfile />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
