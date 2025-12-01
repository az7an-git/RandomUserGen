import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "./UserCard";
import SkeletonCard from "./SkeletonCard";

export const UserList = () => {
  const { filteredUsers, loading } = useContext(UserContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {loading
        ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
        : filteredUsers.map((user) => (
            <UserCard key={user.login.uuid} data={user} />
          ))}
    </div>
  );
};

export default UserList;
