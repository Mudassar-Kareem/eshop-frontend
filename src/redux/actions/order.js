import axios from "axios";
import { server } from "../../server";

export const getUserAllOrder = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "GetUserOrderRequest",
    });
    const { data } = await axios.get(`${server}/order/get-all-orders/${userId}`, {
      withCredentials: true,
    });
    dispatch({
      type: "GetUserOrderSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GetUserOrderFail",
      payload: error.response.data.message,
    });
  }
};

export const getSellerAllOrder = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "GetSellerOrderRequest",
    });
    const { data } = await axios.get(`${server}/order/get-seller-all-orders/${shopId}`, {
      withCredentials: true,
    });
    dispatch({
      type: "GetSellerOrderSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GetSellerOrderFail",
      payload: error.response.data.message,
    });
  }
};

// get all order of admin

export const getAdminAllOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetAdminOrderRequest",
    });
    const { data } = await axios.get(`${server}/order/admin-all-orders`, {
      withCredentials: true,
    });
    dispatch({
      type: "GetAdminOrderSuccess",
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: "GetAdminOrderFail",
      payload: error.response.data.message,
    });
  }
};