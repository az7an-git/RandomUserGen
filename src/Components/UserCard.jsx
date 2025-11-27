const UserCard = ({ data }) => {
  if (!data || typeof data !== "object") return null;

  const {
    name: { first, last },
    gender,
    email,
    dob: { age },
    location: { country },
    picture: { large: pictureUrl },
  } = data;

  return (
    <div className="p-6 rounded-3xl shadow-xl w-full max-w-xs sm:max-w-sm bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.01] transition-all">
      <img
        src={pictureUrl}
        alt={`${first} ${last}`}
        className="rounded-full w-32 h-32 mx-auto shadow-md"
      />

      <h3 className="text-2xl text-center font-bold mt-4 text-gray-900">
        {first} {last}
      </h3>

      <p className="text-center text-lg capitalize text-gray-600">{gender}</p>
      <p className="text-center text-md text-gray-700 mt-1 truncate">{email}</p>

      <div className="flex justify-center gap-3 mt-4">
        <p className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-600">
          {country}
        </p>
        <p className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-600">
          {age} yrs
        </p>
      </div>
    </div>
  );
};

export default UserCard;
