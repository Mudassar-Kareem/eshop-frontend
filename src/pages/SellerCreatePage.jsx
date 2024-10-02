import React, { useEffect } from 'react'
import CreateShop from '../components/shop/CreateShop'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SellerCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller} = useSelector((state) => state.seller);
  useEffect(()=>{
    if(isSeller === true){
      navigate(`/dashboard`);
    }
  },[])
  return (
    <div>
      <CreateShop/>
    </div>
  )
}

export default SellerCreatePage