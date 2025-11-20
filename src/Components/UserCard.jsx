import React from "react";

const UserCard = ({ data }) => {
  if (!data) return <h2 className="text-2xl font-bold">Loading...</h2>;

  return (
    <div className="p-6 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm bg-white/60 backdrop-blur-md border border-white/30 hover:shadow-2xl transition-all">
      <img
        src={data.picture.large}
        alt="User"
        className="rounded-full w-32 h-32 mx-auto shadow-md"
      />

      <h3 className="text-2xl text-center font-bold mt-4 text-gray-900">
        {data.name.first} {data.name.last}
      </h3>

      <p className="text-center text-lg capitalize text-gray-600">
        {data.gender}
      </p>

      <p className="text-center text-md text-gray-700 mt-1">{data.email}</p>

      <div className="flex justify-center gap-3 mt-4">
        <p className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-600">
          {data.location.country}
        </p>
        <p className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-600">
          {data.dob.age} yrs
        </p>
      </div>
    </div>
  );
};

export default UserCard;
