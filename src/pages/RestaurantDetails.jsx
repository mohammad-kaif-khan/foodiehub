import { useParams } from "react-router-dom";

function RestaurantDetails() {

  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto p-5">

      <h1 className="text-3xl font-bold">
        Restaurant ID : {id}
      </h1>

      <p className="mt-3">
        Menu items will be shown here.
      </p>

    </div>
  );
}

export default RestaurantDetails;