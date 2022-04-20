import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar, SearchBarProps } from './search-bar';

const renderSearchBar = (props?: SearchBarProps) => {
  render(<SearchBar {...props} />);
};

describe('<SearchBar />', () => {
  it('should render with label', () => {
    renderSearchBar({ label: 'Search Field' });
    const input = screen.getByLabelText(/search field/i);

    expect(input).toBeInTheDocument();
  });

  it('should have a magnifying glass button', () => {
    renderSearchBar();
    const loupe = screen.getByRole('button', { name: 'Search' });

    expect(loupe).toBeInTheDocument();
  });

  it('should have a clear button', async () => {
    renderSearchBar();
    const input = screen.getByLabelText(/search bar/i);
    userEvent.type(input, 'Hello');

    const clear = await screen.findByRole('button', { name: 'Clear' });
    expect(clear).toBeInTheDocument();

    userEvent.click(clear);
    expect(input).toHaveValue('');
  });

  it('clear button should not be visible without typing text', () => {
    renderSearchBar();
    const clear = screen.queryByRole('button', { name: 'Clear' });
    expect(clear).not.toBeInTheDocument();
  });
});
