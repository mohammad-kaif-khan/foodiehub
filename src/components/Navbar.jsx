import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          FoodieHub
        </h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;