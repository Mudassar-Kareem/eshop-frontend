import React from 'react'
import Header from "../components/shop/layout/Header"
import DashboardSideBar from "../components/shop/layout/DashboardSlidebar"
import AllProducts from '../components/shop/AllProducts'
const ShopAllProductPage = () => {
  return (
    <div>
    <Header />
    <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={3} />
        </div>
        <div className="w-full justify-center flex">
            <AllProducts />
        </div>
      </div>
</div>
  )
}

export default ShopAllProductPage