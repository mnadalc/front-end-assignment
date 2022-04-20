import * as React from 'react';
import './table.css';

import type { Ships, Ship } from '../../App';
import { TableRow } from '../TableRow/table-row';

export const Table: React.VFC<{
  data: Ships;
}> = ({ data }) => {
  return (
    <div className="table-scroller">
      <table className="ships-table">
        <caption className="visually-hidden">Ships information</caption>
        <thead>
          <tr>
            <th />
            <th scope="col">Name</th>
            <th scope="col">PAX</th>
            <th scope="col">Facilities</th>
          </tr>
        </thead>

        <tbody>
          {data.map((ship: Ship, index) => (
            <TableRow ship={ship} key={`ship-${index}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
