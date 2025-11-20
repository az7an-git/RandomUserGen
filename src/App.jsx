import { useEffect, useState } from "react";
import "./App.css";
import { RandomUser } from "./api/RandomUser";
import UserCard from "./Components/UserCard";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadUser = async () => {
    try {
      setLoading(true);
      const user = await RandomUser();
      setUserData(user.results[0]);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-linear-to-br from-slate-200 to-slate-500 ">
      {loading ? (
        <p className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </p>
      ) : (
        userData && <UserCard data={userData} />
      )}

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
