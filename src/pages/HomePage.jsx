import React from 'react'
import Header from '../components/layouts/Header'
import Hero from '../components/route/Hero'
import Categories from '../components/route/Categories'
import BestDeals from '../components/route/BestDeals'
import FeaturedProduct from '../components/route/FeaturedProduct'
import Events from '../components/route/events/Events'
import Sponsored from '../components/route/Sponserd'
import Footer from '../components/layouts/Footer'

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals/>
      <Events/>
      <FeaturedProduct/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}

export default HomePage