import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading:true,
  allProduct :[]
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("ProductCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("ProductCreateSuccess", (state, action) => {
      state.isLoading  = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase("ProductCreateFail", (state, action) => {
      state.isLoading  = false;
      state.error = action.payload;
      state.success = false;
    })

    // get all products by shop id
    .addCase("getAllShopProductRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllShopProductSuccess", (state, action) => {
      state.isLoading  = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase("getAllShopProductFail", (state, action) => {
      state.isLoading  = false;
      state.error = action.payload;
      state.success = false;
    })

    // get all product
    .addCase("getAllProductRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllProductSuccess",(state, action) => {
      state.isLoading  = false;
      state.allProduct = action.payload;
      state.success = true;
    })
    .addCase("getAllProductFail", (state, action) => {
      state.isLoading  = false;
      state.error = action.payload;
      state.success = false;
    })

    // delete shop products by  id
    .addCase("deleteShopProductRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteShopProductSuccess", (state, action) => {
      state.isLoading  = false;
      state.message = action.payload;
      state.success = true;
    })
    .addCase("deleteShopProductFail", (state, action) => {
      state.isLoading  = false;
      state.error = action.payload;
      state.success = false;
    })


    .addCase("clearErrors", (state) => {
      state.error = null;
    });

   
});
