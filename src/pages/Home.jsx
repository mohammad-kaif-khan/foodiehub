
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Pizza House",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    rating: 4.5,
    cuisine: "Pizza",
  },
  {
    id: 2,
    name: "Burger King",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    rating: 4.3,
    cuisine: "Burger",
  },
  {
    id: 3,
    name: "Biryani Hub",
    image:
      "https://images.unsplash.com/photo-1701579231373-f6758f7b8f60?w=500",
    rating: 4.7,
    cuisine: "Biryani",
  },
];

function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Discover Delicious Food 🍔
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold">
                {restaurant.name}
              </h2>

              <p className="text-gray-600">
                {restaurant.cuisine}
              </p>

              <p className="mt-2">
                ⭐ {restaurant.rating}
              </p>

              <Link
                to={`/restaurant/${restaurant.id}`}
                className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded"
              >
                View Menu
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

