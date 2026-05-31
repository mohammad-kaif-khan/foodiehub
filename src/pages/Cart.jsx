
// import { useSelector, useDispatch } from "react-redux";

// import {
//   increaseQty,
//   decreaseQty,
// } from "../redux/cartSlice";

// function Cart() {
//   const dispatch = useDispatch();

//   const cartItems = useSelector(
//     (state) => state.cart.cartItems
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-6">

//       <h1 className="text-4xl font-bold mb-6">
//         Shopping Cart
//       </h1>

//       {cartItems.length === 0 ? (
//         <h2>No Items Added</h2>
//       ) : (
//         cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="border p-4 rounded mb-4 flex justify-between"
//           >
//             <div>
//               <h2 className="font-bold">
//                 {item.name}
//               </h2>

//               <p>
//                 Quantity: {item.quantity}
//               </p>
//             </div>

//             <div className="flex gap-3">

//               <button
//                 onClick={() =>
//                   dispatch(decreaseQty(item.id))
//                 }
//                 className="bg-red-500 text-white px-3 rounded"
//               >
//                 -
//               </button>

//               <button
//                 onClick={() =>
//                   dispatch(increaseQty(item.id))
//                 }
//                 className="bg-green-500 text-white px-3 rounded"
//               >
//                 +
//               </button>

//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Cart;
// import { useSelector, useDispatch } from "react-redux";

// import {
//   increaseQty,
//   decreaseQty,
//   removeFromCart,
// } from "../redux/cartSlice";

// function Cart() {
//   const dispatch = useDispatch();

//   const cartItems = useSelector(
//     (state) => state.cart.cartItems
//   );

//   const totalPrice = cartItems.reduce(
//     (total, item) =>
//       total + item.quantity * (item.caloriesPerServing || 100),
//     0
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-6">

//       <h1 className="text-4xl font-bold mb-6">
//         Shopping Cart
//       </h1>

//       {cartItems.length === 0 ? (
//         <h2>No Items Added</h2>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="border p-4 rounded mb-4 flex justify-between items-center"
//             >
//               <div>
//                 <h2 className="font-bold">
//                   {item.name}
//                 </h2>

//                 <p>
//                   Quantity: {item.quantity}
//                 </p>
//               </div>

//               <div className="flex gap-2">

//                 <button
//                   onClick={() =>
//                     dispatch(decreaseQty(item.id))
//                   }
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   -
//                 </button>

//                 <button
//                   onClick={() =>
//                     dispatch(increaseQty(item.id))
//                   }
//                   className="bg-green-500 text-white px-3 py-1 rounded"
//                 >
//                   +
//                 </button>

//                 <button
//                   onClick={() =>
//                     dispatch(removeFromCart(item.id))
//                   }
//                   className="bg-black text-white px-3 py-1 rounded"
//                 >
//                   Remove
//                 </button>

//               </div>
//             </div>
//           ))}

//           <h2 className="text-2xl font-bold mt-6">
//             Total: ₹{totalPrice}
//           </h2>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.quantity * (item.id * 50),
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>No Items Added</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded mb-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">
                  {item.name}
                </h2>

                <p>
                  Quantity: {item.quantity}
                </p>

                <p className="text-green-600 font-bold">
                  ₹{item.id * 50}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() =>
                    dispatch(decreaseQty(item.id))
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  -
                </button>

                <button
                  onClick={() =>
                    dispatch(increaseQty(item.id))
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="bg-black text-white px-3 py-1 rounded"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-6">
            Total: ₹{totalPrice}
          </h2>

          <Link
            to="/checkout"
            className="bg-orange-500 text-white px-6 py-3 rounded inline-block mt-6"
          >
            Proceed To Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;