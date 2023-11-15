import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import CountryList from "./components/country/CountryList";
import CountrySearch from "./components/search/CountrySearch";

const API_URL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  function getCountries() {
    axios
      .get(API_URL)
      .then((response) => response.data)
      .then((countries) => {
        setIsLoading(false);
        setCountries(countries);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getCountries();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return (
      <div className="App">
        <CountrySearch setSearch={setSearch} />
        <CountryList
          countries={filteredCountries}
          search={search}
          filteredCountries={filteredCountries}
        />
      </div>
    );
  }
}

export default App;
