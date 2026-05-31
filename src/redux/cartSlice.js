// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",

//   initialState: {
//     cartItems: [],
//   },

//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cartItems.push({
//           ...action.payload,
//           quantity: 1,
//         });
//       }
//     },

//     increaseQty: (state, action) => {
//       const item = state.cartItems.find(
//         (item) => item.id === action.payload
//       );

//       if (item) item.quantity += 1;
//     },

//     decreaseQty: (state, action) => {
//       const item = state.cartItems.find(
//         (item) => item.id === action.payload
//       );

//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//   },
// });

// export const {
//   addToCart,
//   increaseQty,
//   decreaseQty,
// } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;