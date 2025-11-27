import "./App.css";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
  const { error } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-200 via-slate-300 to-slate-500 p-6">
      <Filters />
      <UserList />
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
}

export default App;
