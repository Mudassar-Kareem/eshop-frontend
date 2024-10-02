import React from 'react'
import Header from '../components/shop/layout/Header'
import DashboardSlidebar from "../components/shop/layout/DashboardSlidebar"
import ShopAllEvent from '../components/shop/ShopAllEvent'


const ShopAllEventPage = () => {
  
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSlidebar active={5}/>
        </div>
        <div className=" w-full justify-center flex">
          <ShopAllEvent/>
        </div>
      </div>
    </div>
  )
}

export default ShopAllEventPage