import * as React from 'react';
import './search-bar.css';

import { ReactComponent as Cross } from '../../assets/cross.svg';
import { ReactComponent as Loupe } from '../../assets/magnifying-glass.svg';

export type SearchBarProps = {
  label?: string;
};

export const SearchBar: React.VFC<SearchBarProps> = ({ label = '' }) => {
  return (
    <div className="container">
      {label && <label htmlFor="searchbar">{label}</label>}
      <div className="input-wrapper">
        <input
          id="searchbar"
          type="text"
          placeholder="Search"
          aria-label="Search bar"
          defaultValue={''}
        />
        <div className="button-wrapper">
          <button className="button-clear">
            <Cross aria-hidden="true" role="img" />
            <span className="visually-hidden">Clear</span>
          </button>
          <button className={`button-search`}>
            <Loupe aria-hidden="true" role="img" />
            <span className="visually-hidden">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};
