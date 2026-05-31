
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useContext } from "react";

// import { ThemeContext } from "./context/ThemeContext";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import RestaurantDetails from "./pages/RestaurantDetails";
// import Login from "./pages/Login";
// import NotFound from "./pages/NotFound";
// import Checkout from "./pages/Checkout";

// function App() {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <div
//       className={
//         darkMode
//           ? "bg-gray-900 text-white min-h-screen"
//           : "bg-gray-100 min-h-screen"
//       }
//     >
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />

//           <Route path="/login" element={<Login />} />

//           <Route path="/cart" element={<Cart />} />

//           <Route
//             path="/restaurant/:id"
//             element={<RestaurantDetails />}
//           />

//           <Route path="*" element={<NotFound />} />
//           <Route
//   path="/checkout"
//   element={<Checkout />}
// />
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useContext } from "react";

// import { ThemeContext } from "./context/ThemeContext";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Checkout from "./pages/Checkout";
// import NotFound from "./pages/NotFound";
// import RestaurantDetails from "./pages/RestaurantDetails";

// function App() {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <div
//       className={
//         darkMode
//           ? "bg-gray-900 text-white min-h-screen"
//           : "bg-gray-100 min-h-screen"
//       }
//     >
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           {/* Login */}
//           <Route path="/login" element={<Login />} />

//           {/* Home Protected */}
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />

//           {/* Cart */}
//           <Route path="/cart" element={<Cart />} />

//           {/* Checkout */}
//           <Route path="/checkout" element={<Checkout />} />

//           {/* Restaurant Details */}
//           <Route
//             path="/restaurant/:id"
//             element={<RestaurantDetails />}
//           />

//           {/* 404 */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Tracking from "./pages/Tracking";
import RestaurantDetails from "./pages/RestaurantDetails";
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
          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Home */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Order Success */}
          <Route
            path="/success"
            element={<OrderSuccess />}
          />

          {/* Order Tracking */}
          <Route
            path="/tracking"
            element={<Tracking />}
          />

          {/* Restaurant Details */}
          <Route
            path="/restaurant/:id"
            element={<RestaurantDetails />}
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


