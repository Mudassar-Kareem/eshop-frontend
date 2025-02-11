import React, { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import ProductCard from "../components/route/ProductCard";
import styles from "../styles/styles";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  const { allProduct} = useSelector((state) => state.product);

  useEffect(() => {
    console.log("Category Data:", categoryData);
    console.log("All Products:", allProduct);

    if (categoryData === null) {
      const d = allProduct;
      setData(d);
    } else {
      const d =
        allProduct &&
        allProduct.filter(
          (i) => i.category === categoryData
        );
      console.log("Filtered Products:", d);
      setData(d);
    }
  }, [allProduct]); 

  return (
    <div>
    <Header activeHeading={3} />
    <br />
    <br />
    <div className={`${styles.section}`}>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {data &&
          data.map((i, index) => <ProductCard data={i} key={index} />)}
      </div>
      {data && data.length === 0 ? (
        <h1 className="text-center w-full pb-[100px] text-[20px]">
          No products Found!
        </h1>
      ) : null}
    </div>
    <Footer />
  </div>
  );
};

export default ProductPage;
