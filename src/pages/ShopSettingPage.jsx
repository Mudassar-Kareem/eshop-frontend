import React from 'react'
import Header from '../components/shop/layout/Header'
import DashboardSlidebar from "../components/shop/layout/DashboardSlidebar"

import ShopSetting from '../components/shop/ShopSetting'

const ShopSettingPage = () => {
  
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSlidebar active={11}/>
        </div>
        <div className=" w-full justify-center flex">
          <ShopSetting/>
        </div>
      </div>
    </div>
  )
}

export default ShopSettingPage