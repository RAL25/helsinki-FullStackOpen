const CountrieDetails = ({ countrie }) => {
  const keyLanguages = Object.keys(countrie.languages);
  return (
    <div>
      <h1>{countrie.name.common}</h1>
      <p>
        Capital {countrie.capital}
        <br />
        Area {countrie.area}
      </p>
      <h2>Languages</h2>
      <ul>
        {keyLanguages.map((key) => (
          <li key={key}>{countrie.languages[key]}</li>
        ))}
      </ul>
      <img
        src={countrie.flags.svg}
        style={{ width: "200px", border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default CountrieDetails;
