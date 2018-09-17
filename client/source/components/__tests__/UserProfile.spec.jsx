import React from 'react';
import UserProfile from '../presentational/UserProfile';

test('UserProfile Renders correctly', () => {
  const component = global.shallow(<UserProfile />);
  expect(component).toMatchSnapshot();
});
