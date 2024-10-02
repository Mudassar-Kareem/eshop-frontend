import React from 'react'
import Header from '../components/shop/layout/Header'
import DashboardSlidebar from '../components/shop/layout/DashboardSlidebar'
import DashboardHero from '../components/shop/DashboardHero'
import WithdrawMoney from '../components/shop/WithDrawMoney'

const ShopWithDrawMoneyPage = () => {
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSlidebar active={7}/>
        </div>
        <WithdrawMoney/>
      </div>
    </div>
  )
}

export default ShopWithDrawMoneyPage