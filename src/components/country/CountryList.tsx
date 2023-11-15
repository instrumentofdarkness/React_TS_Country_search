import React from "react";
import CountryItem from "./CountryItem";

export default function CountryList({
  countries,
  search,
  filteredCountries,
}: {
  countries: any;
  search: string;
  filteredCountries: any;
}) {
  if (!search) {
    return (
      <div className="countries">
        {countries.map((country: any) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="countries">
        {filteredCountries.map((country: any) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
      </div>
    );
  }
}
