import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

it("renders without crashing", function() {
  render(<Card />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Card caption="test caption" src="test.jpg" currNum={1} totalNum={3} />);
  expect(asFragment()).toMatchSnapshot();
});
