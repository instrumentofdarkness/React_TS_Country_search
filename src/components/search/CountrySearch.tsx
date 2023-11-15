import React from "react";

export default function CountrySearch({ setSearch }: { setSearch: string }) {
  function handleSubmit(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <form>
        <label>
          Please enter a country name:
          <span className="search"></span>
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleSubmit}
          />
        </label>
      </form>
    </div>
  );
}
