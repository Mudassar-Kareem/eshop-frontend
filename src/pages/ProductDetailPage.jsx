import React, { useEffect, useState } from 'react';
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ProductDetail from '../components/products/ProductDetail';
import { useParams } from 'react-router-dom';
import SuggestProduct from '../components/products/SuggestProduct';
import { useSelector } from 'react-redux';

const ProductDetailPage = () => {
  const { allProduct } = useSelector((state) => state.product);
  
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
   const product = allProduct && allProduct.find((i)=> i._id === id);
   setData(product)
  }, [allProduct,id]);

  return (
    <div>
      <Header />
      <ProductDetail data={data} />
      {data ? <SuggestProduct data={data}/> : null}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
