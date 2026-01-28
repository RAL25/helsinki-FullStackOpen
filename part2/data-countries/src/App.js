import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const searchData = async () => {
      await axios.get(baseUrl).then((response) => {
        setCountries(response.data);
      });
    };
    searchData();
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      find countries
      <input value={value} onChange={handleChange} />
      <Countries countries={countries} value={value} />
    </div>
  );
}

export default App;
