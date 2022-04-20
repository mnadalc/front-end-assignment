import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Ship } from '../../App';
import { TableRow } from './table-row';

const mockData: Ship = {
  heading: 'Ship 1',
  passengerCapacity: '100',
  facilities: ['facility 1', 'facility 2'],
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

describe('<TableRow />', () => {
  it('should render data', () => {
    render(<TableRow ship={mockData} />);
    const facilitiesString = mockData.facilities.join(', ');

    const heading = screen.getByRole('rowheader', { name: mockData.heading });
    const passengerCapacity = screen.getByRole('cell', {
      name: mockData.passengerCapacity
    });
    const facilities = screen.getByRole('cell', { name: facilitiesString });

    expect(heading).toBeInTheDocument();
    expect(passengerCapacity).toBeInTheDocument();
    expect(facilities).toBeInTheDocument();
  });

  it('clicking on arrow shows and hide body info', async () => {
    render(<TableRow ship={mockData} />);

    const arrow = screen.getByTestId('down-arrow');

    expect(arrow).toBeInTheDocument();
    expect(screen.queryByText(mockData.body)).not.toBeInTheDocument();

    userEvent.click(arrow);

    const bodyShown = await screen.findByText(mockData.body);
    expect(bodyShown).toBeInTheDocument();

    userEvent.click(arrow);
    expect(screen.queryByText(mockData.body)).not.toBeInTheDocument();
  });
});
