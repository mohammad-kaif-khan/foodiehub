
import { useParams } from "react-router-dom";

function RestaurantDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold">
        Restaurant Details
      </h1>

      <p className="mt-4 text-xl">
        Restaurant ID: {id}
      </p>

    </div>
  );
}

export default RestaurantDetails;

