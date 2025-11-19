import React from "react";

const UserCard = ({ data }) => {
  if (!data) return <h2 className="text-2xl font-bold">Loading...</h2>;

  return (
    <div className="p-6 rounded-xl shadow-md w-80 bg-gray-200">
      <img
        src={data.picture.large}
        alt="User"
        className="rounded-full w-30 h-30 mx-auto"
      />
      <h3 className="text-2xl text-center font-bold mt-4">
        {data.name.first} {data.name.last}
      </h3>
      <p className="text-center text-lg">{data.gender}</p>
      <p className="text-center text-md text-gray-700">{data.email}</p>
    </div>
  );
};

export default UserCard;
