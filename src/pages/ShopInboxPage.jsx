import React from 'react'
import ShopInbox from '../components/shop/ShopInbox'
import DashboardSideBar from '../components/shop/layout/DashboardSlidebar'
import Header from '../components/shop/layout/Header'

const ShopInboxPage = () => {
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSideBar active={8}/>
        </div>
        <ShopInbox/>
      </div>
    </div>
  )
}

export default ShopInboxPage