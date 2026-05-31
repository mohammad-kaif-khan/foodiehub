


// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";

// function RestaurantCard({ recipe }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden">

//       <img
//         src={recipe.image}
//         alt={recipe.name}
//         className="h-56 w-full object-cover"
//       />

//       <div className="p-4">

//         <h2 className="text-xl font-bold">
//           {recipe.name}
//         </h2>

//         <p>⭐ {recipe.rating}</p>

//         <div className="flex gap-3 mt-4">

//           <Link
//             to={`/restaurant/${recipe.id}`}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             View
//           </Link>

//           <button
//             onClick={() => dispatch(addToCart(recipe))}
//             className="bg-orange-500 text-white px-4 py-2 rounded"
//           >
//             Add To Cart
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default RestaurantCard;


// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";

// function RestaurantCard({ recipe }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">
//       <img
//         src={recipe.image}
//         alt={recipe.name}
//         className="h-56 w-full object-cover"
//       />

//       <div className="p-4">
//         <h2 className="text-xl font-bold">
//           {recipe.name}
//         </h2>

//         <p className="text-gray-600">
//           Cuisine: {recipe.cuisine}
//         </p>

//         <p className="mt-2">
//           ⭐ {recipe.rating}
//         </p>

//         <div className="flex gap-3 mt-4">
//           <Link
//             to={`/restaurant/${recipe.id}`}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             View
//           </Link>

//           <button
//             onClick={() => dispatch(addToCart(recipe))}
//             className="bg-orange-500 text-white px-4 py-2 rounded"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RestaurantCard;

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function RestaurantCard({ recipe }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {recipe.name}
        </h2>

        <p className="text-gray-600">
          Cuisine: {recipe.cuisine}
        </p>

        <p className="mt-2">
          ⭐ {recipe.rating}
        </p>

        <p className="text-green-600 font-bold mt-2">
          ₹{recipe.id * 50}
        </p>

        <div className="flex gap-3 mt-4">
          <Link
            to={`/restaurant/${recipe.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View
          </Link>

          <button
            onClick={() => dispatch(addToCart(recipe))}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;