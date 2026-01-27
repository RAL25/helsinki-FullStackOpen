import CountrieDetails from "./CountrieDetails";

const Countries = ({ countries, value }) => {
  const filteredCountries = countries.filter((countrie) => {
    return countrie.name.common.toLowerCase().includes(value.toLowerCase());
  });
  const listCountries = () => {
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length > 1) {
      return filteredCountries.map((countrie) => (
        <li key={countrie.cca3}>{countrie.name.common}</li>
      ));
    }
    return <CountrieDetails countrie={filteredCountries} />;
  };

  return listCountries();
};

export default Countries;
