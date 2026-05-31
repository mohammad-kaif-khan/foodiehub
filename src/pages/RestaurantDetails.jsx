
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantDetails() {
  const { id } = useParams();

  const [food, setFood] = useState(null);

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {
    const res = await axios.get(
      `https://dummyjson.com/recipes/${id}`
    );

    setFood(res.data);
  };

  if (!food) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-96 object-cover rounded"
      />

      <h1 className="text-4xl font-bold mt-6">
        {food.name}
      </h1>

      <p className="mt-3">
        Cuisine : {food.cuisine}
      </p>

      <p className="mt-3">
        Rating : ⭐ {food.rating}
      </p>

    </div>
  );
}

export default RestaurantDetails;
