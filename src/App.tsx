import * as React from 'react';

import { SearchBar } from './components/SearchBar/search-bar';
import { Table } from './components/Table/table';

export type Ship = {
  heading: string;
  passengerCapacity: string;
  facilities: string[];
  body: string;
};

export type Ships = Array<Ship>;

const App = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<Ships | null>(null);

  const handleSearch = async (value: string) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:4000/api/ships/${value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'http://localhost:3000'
        }
      });

      const data = await response.json();

      if (data && data.length > 0) {
        const cruises = data.map((ship: Ship) => {
          const { heading, passengerCapacity, facilities, body } = ship;

          return {
            heading,
            passengerCapacity,
            facilities,
            body
          };
        });

        setResults(cruises);
      }
    } catch (e) {
      throw new Error(`Something went wrong ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3>Search Flow</h3>
      <SearchBar
        handleSearch={handleSearch}
        handleClear={() => setResults(null)}
      />
      {loading && <p>Loading...</p>}
      {results && <Table data={results} />}
    </>
  );
};

export default App;
