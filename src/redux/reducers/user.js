import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


// update user address
.addCase("UpdateAddressRequest", (state) => {
  state.addressLoading= true;
})
.addCase("UpdateAddressSuccess", (state, action) => {
  state.addressLoading = false;
  state.user = action.payload;
})
.addCase("UpdateAddressFail", (state, action) => {
  state.addressLoading= false;
  state.error = action.payload;
})

// delete user address
.addCase("DeleteAddressRequest", (state) => {
  state.addressLoading= true;
})
.addCase("DeleteAddressSuccess", (state, action) => {
  state.addressLoading = false;
  state.user = action.payload;
})
.addCase("DeleteAddressFail", (state, action) => {
  state.addressLoading= false;
  state.error = action.payload;
})


.addCase("getAllUsersRequest", (state) => {
  state.isLoading = true;
})
.addCase("getAllUsersSuccess", (state, action) => {
  state.isLoading = false;
  state.users = action.payload;
})
.addCase("getAllUsersFailed", (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})



    .addCase("clearErrors", (state) => {
      state.error = null;
    });

   
});
