import React from 'react'
import Header from '../components/shop/layout/Header'
import DashboardSlidebar from "../components/shop/layout/DashboardSlidebar"
import SellerOrder from '../components/shop/SellerOrder'

const SellerOrderPage = () => {
  
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSlidebar active={2}/>
        </div>
        <div className=" w-full justify-center flex">
          <SellerOrder/>
        </div>
      </div>
    </div>
  )
}

export default SellerOrderPage