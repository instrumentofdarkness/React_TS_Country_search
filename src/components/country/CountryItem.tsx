import React from "react";

export default function CountryItem({ country }: { country: any }) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} />
      <p>{country.region}</p>
      <p>{country.subregion}</p>
      <p>{country.capital}</p>
      <p>{country.population}</p>
      <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
        view in Google Maps
      </a>
    </div>
  );
}
