import React, { useEffect } from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";
import CountDown from "./CountDown";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";


const EventCard = ({active,data}) => {
 
  return (
    <div
      className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={data.images[0]?.url} alt=""/>
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>{data.name}</h2>
        <p className=" text-justify">{data.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {data.discountPrice} $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data.originalPrice}  $
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data.sold_out} sold
          </span>
        </div>
        <CountDown targetDate={data.Finish_Date}  />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} >Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
