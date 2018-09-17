import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '../presentational/Timer';

test('Timer Renders correctly', () => {
  const component = renderer.create(<Timer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
