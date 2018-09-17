import React from 'react';
import Route from '../presentational/Route';

// need a way to set prop values so that undefined error does not cause snapshot to fail

test('Route component Renders correctly', () => {
  const component = global.shallow(<Route routeName="test" />);
  expect(component).toMatchSnapshot();
});
