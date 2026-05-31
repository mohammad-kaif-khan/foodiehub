function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white p-4 rounded-xl shadow-lg">
      <div className="bg-gray-300 h-56 rounded"></div>

      <div className="bg-gray-300 h-5 mt-4 rounded"></div>

      <div className="bg-gray-300 h-4 mt-2 rounded"></div>

      <div className="bg-gray-300 h-10 mt-4 rounded"></div>
    </div>
  );
}

export default SkeletonCard;