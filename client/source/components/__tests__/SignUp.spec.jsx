import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../presentational/SignUp';

test('App Renders correctly', () => {
  const component = renderer.create(<SignUp />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
