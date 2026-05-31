
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import RestaurantDetails from "./pages/RestaurantDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 min-h-screen"
      }
    >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/restaurant/:id"
            element={<RestaurantDetails />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
