import { useState, useEffect } from "react";
import { RandomUser } from "../api/randomUser";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [genderFilter, setGenderFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("all");

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await RandomUser(9);
      setUsers(data.results);
      setGenderFilter("all");
      setCountryFilter("all");
    } catch (e) {
      setError(`Failed to load users. ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const genderMatch = genderFilter === "all" || user.gender === genderFilter;
    const countryMatch =
      countryFilter === "all" || user.location.country === countryFilter;
    return genderMatch && countryMatch;
  });

  const countries = [...new Set(users.map((u) => u.location.country))];

  return (
    <UserContext.Provider
      value={{
        users,
        loadUsers,
        error,
        loading,
        filteredUsers,
        genderFilter,
        setGenderFilter,
        countries,
        countryFilter,
        setCountryFilter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
