import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  wishlist:
    localStorage.getItem("wishlistItem") &&
    localStorage.getItem("wishlistItem") !== "undefined"
      ? JSON.parse(localStorage.getItem("wishlistItem"))
      : [],
};

export const wishlistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("addToWishlist", (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i._id === item._id);

      if (isItemExist) {
        // Update the existing item in the wishlist
        state.wishlist = state.wishlist.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        // Add a new item to the wishlist
        state.wishlist.push(item);
      }
    })
    .addCase("removeFromWishlist", (state, action) => {
      // Remove the item from the wishlist
      state.wishlist = state.wishlist.filter((i) => i._id !== action.payload);
    });
});

