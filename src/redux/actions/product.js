import axios from "axios";
import { server } from "../../server";

export const createProduct =
  (
    name,
    description,
    category,
    tags,
    originalPrice,
    discountPrice,
    stock,
    shopId,
    images
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "ProductCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/product/create-product`,
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        shopId,
        images
      );

      dispatch({
        type: "ProductCreateSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "ProductCreateFail",
        payload: error.response.data.message,
      });
    }
  };

  export const getAllShopProduct  = (id) =>async(dispatch)=>{
    try {
      dispatch({
        type: "getAllShopProductRequest",
      });
      const {data} = await axios.get(`${server}/product/get-all-products-shop/${id}`);
      dispatch({
        type: "getAllShopProductSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "getAllShopProductFail",
        payload: error.response.data.message,
      });
    }
  }

  export const getAllProduct  = () =>async(dispatch)=>{
    try {
      dispatch({
        type: "getAllProductRequest",
      });
      const {data} = await axios.get(`${server}/product/get-all-products`);
      dispatch({
        type: "getAllProductSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "getAllProductFail",
        payload: error.response.data.message,
      });
    }
  }

  export const deleteShopProduct  = (id) =>async(dispatch)=>{
    try {
      dispatch({
        type: "deleteShopProductRequest",
      });
      const {data} = await axios.delete(`${server}/product/delete-shop-product/${id}`,{
        withCredentials:true
      });
      dispatch({
        type: "deleteShopProductSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "deleteShopProductFail",
        payload: error.response.data.message,
      });
    }
  }