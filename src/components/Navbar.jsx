


import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <nav className="bg-orange-500 text-white p-4">

      <div className="max-w-7xl mx-auto flex justify-between">

        <h1 className="font-bold text-2xl">
          FoodieHub
        </h1>

        <div className="flex gap-6">

          <Link to="/">Home</Link>

          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;