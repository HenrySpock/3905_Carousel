import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders carousel title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Shells from far away beaches./i);
  expect(titleElement).toBeInTheDocument();
});

