
import { useSelector, useDispatch } from "react-redux";

import {
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>No Items Added</h2>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded mb-4 flex justify-between"
          >
            <div>
              <h2 className="font-bold">
                {item.name}
              </h2>

              <p>
                Quantity: {item.quantity}
              </p>
            </div>

            <div className="flex gap-3">

              <button
                onClick={() =>
                  dispatch(decreaseQty(item.id))
                }
                className="bg-red-500 text-white px-3 rounded"
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch(increaseQty(item.id))
                }
                className="bg-green-500 text-white px-3 rounded"
              >
                +
              </button>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;


