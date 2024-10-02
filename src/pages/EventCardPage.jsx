import React, { useEffect } from 'react'
import Header from '../components/layouts/Header'
import EventCard from '../components/route/events/EventCard'
import Loader from '../components/layouts/Loader'
import { useSelector } from 'react-redux'

const EventCardPage = () => {
  const { allEvent, isLoading } = useSelector((state) => state.event);
  console.log(allEvent);
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <div>
        <Header activeHeading={4} />
        <EventCard active={true} data={allEvent && allEvent[0]} />
      </div>
    )}
  </>
  )
}

export default EventCardPage