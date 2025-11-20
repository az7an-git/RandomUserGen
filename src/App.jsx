import { useEffect, useState } from "react";
import "./App.css";
import { RandomUser } from "./api/RandomUser";
import UserCard from "./Components/UserCard";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const user = await RandomUser();
      setUserData(user.results[0]);
    } catch (e) {
      console.error("Failed to fetch user:", e);
      setError("Failed to load user. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-slate-200 via-slate-300 to-slate-500 p-6">
      {loading ? (
        <div className="flex flex-col items-center animate-pulse">
          <div className="w-20 h-20 rounded-full bg-gray-300 mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      ) : (
        userData && <UserCard data={userData} />
      )}

      {error && <p className="text-red-500 mt-2 font-medium">{error}</p>}

      <button
        onClick={loadUser}
        className="mt-5 px-6 py-3 bg-amber-500 hover:bg-amber-400 active:scale-95 transition-all text-white rounded-xl shadow-md font-medium"
      >
        New User
      </button>
    </div>
  );
}

export default App;
