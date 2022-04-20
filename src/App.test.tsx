import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders <Searchbar /> component', () => {
  render(<App />);

  const searchBar = screen.getByPlaceholderText(/search/i);
  expect(searchBar).toBeInTheDocument();

  const loupe = screen.getByRole('button', { name: 'Search' });
  expect(loupe).toBeInTheDocument();

  userEvent.type(searchBar, 'abcd');
  expect(searchBar).toHaveValue('abcd');

  const clear = screen.getByRole('button', { name: 'Clear' });
  expect(clear).toBeInTheDocument();
});
