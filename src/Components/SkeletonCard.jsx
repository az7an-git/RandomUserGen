const SkeletonCard = () => {
  return (
    <div className="p-10 rounded-2xl shadow-xl w-full max-w-sm bg-white/50 animate-pulse">
      <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto"></div>

      <div className="h-5 bg-gray-300 rounded mt-4 w-3/4 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded mt-2 w-1/2 mx-auto"></div>

      <div className="flex justify-center gap-3 mt-4">
        <div className="h-7 w-20 bg-gray-300 rounded"></div>
        <div className="h-7 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
