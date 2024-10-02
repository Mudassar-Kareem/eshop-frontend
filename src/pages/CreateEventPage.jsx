import React from 'react'
import Header from '../components/shop/layout/Header'
import DashboardSlidebar from "../components/shop/layout/DashboardSlidebar"
import CreateEvent from '../components/shop/CreateEvent'

const CreateEventPage = () => {
  
  return (
    <div>
      <Header/>
      <div className="flex justify-between items-center">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSlidebar active={6}/>
        </div>
        <div className=" w-full justify-center flex">
          <CreateEvent/>
        </div>
      </div>
    </div>
  )
}

export default CreateEventPage