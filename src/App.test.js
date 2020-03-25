import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders address book link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/address book/i);
  expect(linkElement).toBeInTheDocument();
});
