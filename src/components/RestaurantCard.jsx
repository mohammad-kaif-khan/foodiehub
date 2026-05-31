import { Link } from "react-router-dom";

function RestaurantCard({ recipe }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">

      <img
        src={recipe.image}
        alt={recipe.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {recipe.name}
        </h2>

        <p className="text-gray-600">
          Cuisine: {recipe.cuisine}
        </p>

        <p className="mt-2">
          ⭐ {recipe.rating}
        </p>

        <Link
          to={`/restaurant/${recipe.id}`}
          className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded"
        >
          View Menu
        </Link>

      </div>
    </div>
  );
}

export default RestaurantCard;