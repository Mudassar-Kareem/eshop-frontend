// Add to wishlist
export const addToWishlist = (data) => async (dispatch, getState) => {
    dispatch({
      type: "addToWishlist",
      payload: data,
    });
  
    localStorage.setItem("wishlistItem", JSON.stringify(getState().wishlist.wishlist));
    return data;
  };
  
  // Remove from wishlist
  export const removeFromWishlist = (data) => async (dispatch, getState) => {
    dispatch({
      type: "removeFromWishlist",
      payload: data._id,
    });
  
    localStorage.setItem("wishlistItem", JSON.stringify(getState().wishlist.wishlist));
    return data;
  };
  