import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/recipes"
      );

      setRestaurants(res.data.recipes);
      setFilteredRestaurants(res.data.recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let data = restaurants;

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      data = data.filter(
        (item) => item.cuisine === category
      );
    }

    setFilteredRestaurants(data);
  }, [search, category, restaurants]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Food Delivery App 🍔
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded flex-1"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border p-3 rounded"
        >
          <option value="All">All</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
        </select>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredRestaurants.map((recipe) => (
          <RestaurantCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;