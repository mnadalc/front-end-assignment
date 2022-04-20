import * as React from 'react';
import './search-bar.css';
import debounce from 'lodash.debounce';

import cross from '../../assets/cross.svg';
import loupe from '../../assets/magnifying-glass.svg';

export type SearchBarProps = {
  label?: string;
  handleClear: () => void;
  handleSearch: (value: string) => {};
};

export const SearchBar: React.VFC<SearchBarProps> = ({
  label = '',
  handleSearch,
  handleClear
}) => {
  const [value, setValue] = React.useState<string>('');

  const debouncedHandleSearch = React.useMemo(
    () => debounce(handleSearch, 1500),
    [handleSearch]
  );

  React.useEffect(
    () => () => debouncedHandleSearch.cancel(),
    [debouncedHandleSearch]
  );

  const handleOnChange = (text: string) => {
    setValue(text);
    text ? debouncedHandleSearch(text) : handleClear();
  };

  return (
    <div className="container">
      {label && <label htmlFor="searchbar">{label}</label>}
      <div className="input-wrapper">
        <input
          id="searchbar"
          type="text"
          placeholder="Search"
          aria-label="Search bar"
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(value);
            }
          }}
        />
        <div className="button-wrapper">
          {value && (
            <button className="button-clear" onClick={() => handleOnChange('')}>
              <img src={cross} alt="Clear field" aria-hidden="true" />
              <span className="visually-hidden">Clear</span>
            </button>
          )}
          <button
            className={`button-search ${value && 'button-focused'}`}
            onClick={() => handleSearch(value)}
          >
            <img
              src={loupe}
              alt="Search field"
              aria-hidden="true"
              className={`${value ? 'loupe-active' : ''}`}
            />
            <span className="visually-hidden">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};
