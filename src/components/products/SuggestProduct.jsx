import React, { useEffect, useState } from 'react'
import {productData} from "../../static/data"
import styles from "../../styles/styles";
import ProductCard from "../route/ProductCard"
import { useSelector } from 'react-redux';
const SuggestProduct = ({data}) => {
    const [productDat,setProductData] =useState();
    const {allProduct} = useSelector((state)=>state.product);
    useEffect(()=>{
        const product = allProduct && allProduct.filter((i) => i.category === data.category);
        setProductData(product);
    },[]);
  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
             {
                productDat && productDat.map((i,index) => (
                    <ProductCard data={i} key={index} />
                ))
             }
      </div>
        </div>
      ) : null}
    </div>
  )
}

export default SuggestProduct