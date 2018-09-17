import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../presentational/Login';

test('Login Renders correctly', () => {
  const component = renderer.create(<Login />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
