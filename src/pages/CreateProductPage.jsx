import React from 'react'
import Header from '../components/shop/layout/Header'
import DashboardSlidebar from "../components/shop/layout/DashboardSlidebar"
import CreateProducts from '../components/shop/CreateProducts'

const CreateProductPage = () => {
  
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSlidebar active={4}/>
        </div>
        <div className=" w-full justify-center flex">
          <CreateProducts/>
        </div>
      </div>
    </div>
  )
}

export default CreateProductPage