import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import UserCard from "./UserCard";
import LoaderScreen from "./LoaderScreen";

export const UserList = () => {
  const { filteredUsers, loading } = useContext(UserContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {loading ? (
        <LoaderScreen />
      ) : (
        filteredUsers.map((user) => (
          <UserCard key={user.login.uuid} data={user} />
        ))
      )}
    </div>
  );
};

export default UserList;
