import React from 'react';
import { render } from '@testing-library/react';
import Client from './App';

test('renders learn react link', () => {
  const { getByText } = render(<Client />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});