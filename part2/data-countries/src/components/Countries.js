import { useState, useEffect } from "react";
import CountrieDetails from "./CountrieDetails";

const Countries = ({ countries, value }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setSelectedCountry(null);
  }, [value]);

  const filteredCountries = countries.filter((countrie) => {
    return countrie.name.common.toLowerCase().includes(value.toLowerCase());
  });
  const listCountries = () => {
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length > 1) {
      return (
        <div>
          {filteredCountries.map((countrie) => (
            <li key={countrie.cca3}>
              {countrie.name.common}
              <button onClick={() => setSelectedCountry(countrie)}>Show</button>
            </li>
          ))}
          {selectedCountry && <CountrieDetails countrie={selectedCountry} />}
        </div>
      );
    } else if (filteredCountries.length === 1) {
      return <CountrieDetails countrie={filteredCountries[0]} />;
    }
    return <h3>No found</h3>;
  };

  return listCountries();
};

export default Countries;
