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
    <div className="flex flex-col justify-center items-center h-dvh ">
      {userData && <UserCard data={userData} />}
      <button
        onClick={refresh}
        className="p-2 mt-4 bg-amber-400 px-4 rounded-lg hover:bg-amber-300"
      >
        New User
      </button>
    </div>
  );
}
export default App;
