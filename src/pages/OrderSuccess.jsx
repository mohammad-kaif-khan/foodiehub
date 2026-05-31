import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="text-center py-20">

      <h1 className="text-5xl font-bold text-green-600">
        🎉 Order Placed Successfully
      </h1>

      <p className="mt-4 text-xl">
        Your food is being prepared.
      </p>

      <Link
        to="/tracking"
        className="bg-orange-500 text-white px-6 py-3 rounded inline-block mt-6"
      >
        Track Order
      </Link>

    </div>
  );
}

export default OrderSuccess;