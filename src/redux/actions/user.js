import axios from "axios";
import { server } from "../../server";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const updateUserAdress =
  (country, city, address1, address2, zipCode, addressType) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "UpdateAddressRequest",
      });
      const { data } = await axios.put(
        `${server}/user/update-address`,
        { country, city, address1, address2, zipCode, addressType },
        { withCredentials: true }
      );
      dispatch({
        type: "UpdateAddressSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "UpdateAddressFail",
        payload: error.response.data.message,
      });
    }
  };

  export const deleteUserAdress =
  (id) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "DeleteAddressRequest",
      });
      const { data } = await axios.delete(
        `${server}/user/delete-user-address/${id}`,
        
        { withCredentials: true }
      );
      dispatch({
        type: "DeleteAddressSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "DeleteAddressFail",
        payload: error.response.data.message,
      });
    }
  };


export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const { data } = await axios.get(`${server}/shop/getseller`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response.data.message,
    });
  }
};


// get all users --- admin
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailed",
    //   payload: error.response.data.message,
    });
  }
};
