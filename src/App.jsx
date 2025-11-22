import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import SkeletonCard from "./Components/SkeletonCard";
import { RandomUser } from "./api/RandomUser";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await RandomUser(6); // fetch 6 users
      setUsers(data.results);
    } catch (e) {
      setError("Failed to load users.", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-200 via-slate-300 to-slate-500 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : users.map((user, idx) => <UserCard key={idx} data={user} />)}
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <div className="flex justify-center mt-6">
        <button
          onClick={loadUsers}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 rounded-xl text-white shadow-md active:scale-95 transition"
        >
          Load New Users
        </button>
      </div>
    </div>
  );
}

export default App;
