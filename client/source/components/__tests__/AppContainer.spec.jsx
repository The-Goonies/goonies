import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from '../container/AppContainer';

describe('<AppContainer />', () => {
  test('renders 1 app component', () => {
    const component = shallow(<AppContainer />);
    expect(component).toHaveLength(1);
  });
});
