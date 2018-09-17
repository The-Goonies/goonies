import React from 'react';
import SignUp from '../presentational/SignUp';

test('SignUp Renders correctly', () => {
  const component = global.shallow(<SignUp />);
  expect(component).toMatchSnapshot();
});
