import { screen, render, within } from '@testing-library/react';
import { Ships } from '../../App';
import { Table } from './table';

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

describe('<Table />', () => {
  it('should have table header', () => {
    render(<Table data={mockData} />);

    const rows = screen.getAllByRole('row');
    const header = rows[0];

    const name = within(header).getByRole('columnheader', { name: /name/i });
    const pax = within(header).getByRole('columnheader', { name: /pax/i });
    const facilities = within(header).getByRole('columnheader', {
      name: /facilities/i
    });

    expect(name).toBeInTheDocument();
    expect(pax).toBeInTheDocument();
    expect(facilities).toBeInTheDocument();
  });

  it('should render data', () => {
    render(<Table data={mockData} />);

    mockData.forEach((ship) => {
      const facilitiesString = ship.facilities.join(', ');

      const heading = screen.getByRole('rowheader', { name: ship.heading });
      const passengerCapacity = screen.getByRole('cell', {
        name: ship.passengerCapacity
      });
      const facilities = screen.getByRole('cell', { name: facilitiesString });

      expect(heading).toBeInTheDocument();
      expect(passengerCapacity).toBeInTheDocument();
      expect(facilities).toBeInTheDocument();
    });
  });
});
