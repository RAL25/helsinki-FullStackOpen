const CountrieDetails = ({ countrie }) => {
  const countrieLanguages = Object.values(countrie[0].languages);
  return (
    <div>
      <h1>{countrie[0].name.common}</h1>
      <p>
        Capital {countrie[0].capital}
        <br />
        Area {countrie[0].area}
      </p>
      <h2>Languages</h2>
      <ul>
        {countrieLanguages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img
        src={countrie[0].flags.svg}
        style={{ width: "200px", border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default CountrieDetails;
