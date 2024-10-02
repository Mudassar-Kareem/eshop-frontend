import axios from "axios";
import { server } from "../../server";

export const createEvent =
  (
    name,
    description,
    category,
    tags,
    originalPrice,
    discountPrice,
    stock,
    images,
    shopId,
    start_Date,
    Finish_Date
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "createEventRequest",
      });

      const { data } = await axios.post(
        `${server}/event/create-event`,
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        images,
        shopId,
        start_Date,
        Finish_Date
      );

      dispatch({
        type: "createEventSuccess",
        payload: data.event,
      });
    } catch (error) {
      dispatch({
        type: "createEventFail",
        payload: error.response.data.message,
      });
    }
  };

export const getAllShopEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllShopEventRequest",
    });
    const { data } = await axios.get(`${server}/event/get-shop-event/${id}`);
    dispatch({
      type: "getAllShopEventSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "getAllShopEventFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllEvent = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventRequest",
    });
    const { data } = await axios.get(`${server}/event/get-all-event`);
    dispatch({
      type: "getAllEventSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "getAllEventFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteShopEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteShopEventRequest",
    });
    const { data } = await axios.delete(`${server}/event/delete-event/${id}`);
    dispatch({
      type: "deleteShopEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteShopEventFail",
      payload: error.response.data.message,
    });
  }
};
