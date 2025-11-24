import { useState, useEffect } from "react";
import { UserContext } from "./userContext";
import { RandomUser } from "../api/randomUser";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await RandomUser(4);
      setUsers(data.results);
    } catch (e) {
      setError(`Failed to load users. ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, loading, error, loadUsers }}>
      {children}
    </UserContext.Provider>
  );
};
