import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

