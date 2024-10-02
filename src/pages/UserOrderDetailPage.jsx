import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import UserOrderDetail from '../components/shop/UserOrderDetail'

const UserOrderDetailPage = () => {
  return (
    <div>
        <Header/>
        <UserOrderDetail/>
        <Footer/>
    </div>
  )
}

export default UserOrderDetailPage