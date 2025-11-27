// src/components/Filters.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const Filters = () => {
  const {
    genderFilter,
    setGenderFilter,
    countryFilter,
    setCountryFilter,
    countries,
    loadUsers,
  } = useContext(UserContext);

  return (
    <div className="flex justify-center gap-4 mb-6">
      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
        className="px-4 py-2 rounded-lg bg-white shadow"
      >
        <option value="all">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button
        onClick={loadUsers}
        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 rounded-xl text-white shadow-md active:scale-95 transition"
      >
        Load New Users
      </button>

      <select
        value={countryFilter}
        onChange={(e) => setCountryFilter(e.target.value)}
        className="px-4 py-2 rounded-lg bg-white shadow"
      >
        <option value="all">All Countries</option>
        {countries.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
