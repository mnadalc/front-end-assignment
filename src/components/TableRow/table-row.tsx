import * as React from 'react';
import './table-row.css';
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

import type { Ship } from '../../App';

export const TableRow: React.VFC<{ ship: Ship }> = ({ ship }) => {
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const { heading, passengerCapacity, facilities, body } = ship;

  const pax = passengerCapacity || 'n/a';
  const facilitiesList = facilities.join(', ');

  return (
    <>
      <tr>
        <td>
          <DownArrow
            aria-hidden="true"
            role="img"
            data-testid="down-arrow"
            className={`down-arrow-icon ${isShown ? 'icon-rotation' : ''}`}
            onClick={() => setIsShown(!isShown)}
          />
          <span className="visually-hidden">Show more info</span>
        </td>
        <th scope="row" className="th-inner">
          {heading}
        </th>
        <td>{pax}</td>
        <td>{facilitiesList}</td>
      </tr>

      {isShown && (
        <tr>
          <td colSpan={4}>
            <h3 className="ship-info-header-row">{heading}</h3>
            <div
              className="ship-info-content-row"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </td>
        </tr>
      )}
    </>
  );
};
