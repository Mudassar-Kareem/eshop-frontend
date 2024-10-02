import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/Loader";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import axios from "axios";
import { server } from "../../server";
import { getAllShopProduct } from "../../redux/actions/product";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { product } = useSelector((state) => state.product);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShopData = async () => {
      setIsLoading(true);
      try {
        dispatch(getAllShopProduct(id));
        const res = await axios.get(`${server}/shop/get-shop-info/${id}`);
        setData(res.data.shop);
      } catch (error) {
        console.error("Failed to fetch shop info:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchShopData();
  }, [dispatch, id]);

  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/shop/logout`, {
        withCredentials: true,
      });
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const totalReviewsLength =
  product &&
  product.reduce((acc, product) => acc + product.reviews.length, 0);

const totalRatings = product && product.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full py-5">
            <div className="w-full flex item-center justify-center">
              <img
                src={`${data.avatar?.url || ""}`}
                alt="Shop Avatar"
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            <h3 className="text-center py-2 text-[20px]">
              {data.name || "Shop Name"}
            </h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center text-justify">
            {data.description}
            </p>
          </div>

          <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">
              {data.address || "Address not available."}
            </h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Phone Number</h5>
            <h4 className="text-[#000000a6]">
              {data.phoneNumber || "Phone number not available."}
            </h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Total Products</h5>
            <h4 className="text-[#000000a6]">{product?.length || 0}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Shop Ratings</h5>
            <h4 className="text-[#000000b0]">{averageRating}/5</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000b0]">
              {data.createdAt ? data.createdAt.slice(0, 10) : "N/A"}
            </h4>
          </div>

          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
                  <span className="text-white">Edit Shop</span>
                </div>
              </Link>
              <div
                className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
                onClick={logoutHandler}
              >
                <span className="text-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
