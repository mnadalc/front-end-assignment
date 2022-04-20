import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import type { Ships } from './App';

const mockData: Ships = [
  {
    heading: 'Ship 1',
    passengerCapacity: '100',
    facilities: ['facility 1', 'facility 2'],
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    heading: 'Ship 2',
    passengerCapacity: '200',
    facilities: ['facility 3', 'facility 4'],
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  }
];

describe('<App />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

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

  test('shows loading state', () => {
    render(<App />);

    const searchBar = screen.getByPlaceholderText(/search/i);
    userEvent.type(searchBar, 'abcd{enter}');

    const loading = screen.getByText(/loading.../i);
    expect(loading).toBeInTheDocument();
  });

  test('shows table if there is data', async () => {
    const mockFetchShips = Promise.resolve({
      json: () => Promise.resolve(mockData)
    });

    const globalRef = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchShips);

    render(<App />);

    const searchBar = screen.getByPlaceholderText(/search/i);
    userEvent.type(searchBar, 'abcd{enter}');

    const table = await screen.findByRole('table');
    expect(table).toBeInTheDocument();
  });
});
