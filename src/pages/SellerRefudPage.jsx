import React from 'react'
import Header from '../components/shop/layout/Header'
import DashboardSlidebar from "../components/shop/layout/DashboardSlidebar"
import SellerRefund from '../components/shop/SellerRefund'


const SellerRefudPage = () => {
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSlidebar active={10}/>
        </div>
       <SellerRefund/>
      </div>
    </div>
  )
}

export default SellerRefudPage