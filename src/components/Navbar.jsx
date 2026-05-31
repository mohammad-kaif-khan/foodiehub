
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <nav className="bg-orange-500 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">

        <h1 className="font-bold text-2xl">
          FoodieHub
        </h1>

        <div className="flex gap-5">

          <Link to="/">Home</Link>

          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>

          <button
            onClick={toggleTheme}
            className="bg-white text-black px-3 rounded"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;