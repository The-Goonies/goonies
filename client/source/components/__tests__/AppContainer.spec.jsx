import React from 'react';
import AppContainer from '../container/AppContainer';


test('App renders component correctly', () => {
  const component = global.shallow(<AppContainer />);
  expect(component).toMatchSnapshot();
});
