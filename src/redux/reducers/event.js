import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading:true,
  allEvent:[]
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("createEventRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("createEventSuccess", (state, action) => {
      state.success = true;
      state.isLoading = false;
      state.event = action.payload;
    })
    .addCase("createEventFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })


    .addCase("getAllShopEventRequest", (state) => {
      state.isLoading = true;
    })

    .addCase("getAllShopEventSuccess", (state, action) => {
      state.success = true;
      state.isLoading = false;
      state.event = action.payload;
    })
    .addCase("getAllShopEventFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    .addCase("getAllEventRequest", (state) => {
      state.isLoading = true;
    })

    .addCase("getAllEventSuccess", (state, action) => { 
      state.isLoading = false;
      state.allEvent = action.payload;
    })
    .addCase("getAllEventFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    .addCase("deleteShopEventRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteShopEventSuccess", (state, action) => {
      state.success = true;
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("deleteShopEventFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })


    .addCase("clearErrors", (state) => {
      state.error = null;
    });

   
});
