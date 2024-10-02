import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    orderLoading:false,
    adminOrderLoading:true
};

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("GetUserOrderRequest", (state) => {
      state.orderLoading= true;
    })
    .addCase("GetUserOrderSuccess", (state, action) => {
      state.orderLoading = false;
      state.order = action.payload;
    })
    .addCase("GetUserOrderFail", (state, action) => {
      state.orderLoading = false;
      state.error = action.payload;
    })

    .addCase("GetSellerOrderRequest", (state) => {
      state.orderLoading= true;
    })
    .addCase("GetSellerOrderSuccess", (state, action) => {
      state.orderLoading = false;
      state.order = action.payload;
    })
    .addCase("GetSellerOrderFail", (state, action) => {
      state.orderLoading = false;
      state.error = action.payload;
    })

    // get all order --- for admin
    .addCase("GetAdminOrderRequest", (state) => {
      state.adminOrderLoading= true;
    })
    .addCase("GetAdminOrderSuccess", (state, action) => {
      state.adminOrderLoading = false;
      state.adminOrder = action.payload;
    })
    .addCase("GetAdminOrderFail", (state, action) => {
      state.adminOrderLoading= false;
      state.error = action.payload;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
