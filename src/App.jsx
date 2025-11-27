import "./App.css";
import UserCard from "./components/UserCard";
import SkeletonCard from "./components/SkeletonCard";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
  const {
    filteredUsers,
    loading,
    error,
    loadUsers,
    genderFilter,
    setGenderFilter,
    countryFilter,
    setCountryFilter,
    countries,
  } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-200 via-slate-300 to-slate-500 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredUsers.map((user) => (
              <UserCard key={user.login.uuid} data={user} />
            ))}
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <div className="flex justify-center mt-6">
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white shadow mx-2"
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
          className="px-4 py-2 rounded-lg bg-white shadow mx-2"
        >
          <option value="all">All Countries</option>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
