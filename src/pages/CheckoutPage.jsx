import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer';
import CheckoutSteps from "../components/checkout/CheckoutSteps"
import Checkout from '../components/checkout/Checkout';

const CheckoutPage = () => {
  return (
    <div>
        <Header />
        <br />
        <br />
        <CheckoutSteps active={1} />
        <Checkout/>
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default CheckoutPage