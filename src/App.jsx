import { RandomUser } from "./api/RandomUser";
import "./App.css";
import { useEffect, useState } from "react";
import UserCard from "./Components/UserCard";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    RandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    RandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-slate-200 to-slate-400 ">
      {userData && <UserCard data={userData} />}
      <button
        onClick={refresh}
        className="mt-5 px-6 py-3 bg-amber-500 hover:bg-amber-400 active:scale-95 transition-all text-white rounded-xl shadow-md font-medium"
      >
        New User
      </button>
    </div>
  );
}
export default App;
