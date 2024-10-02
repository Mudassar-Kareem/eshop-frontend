import React from "react";
import styles from "../../../styles/styles";
import EventCard from "./EventCard";
import { useSelector } from "react-redux";

const Events = () => {
  const { allEvent, isLoading } = useSelector((state) => state.event);
  

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className="w-full grid">
            {allEvent.length !== 0 && (
              <EventCard data={allEvent && allEvent[0]} />
            )}
            <h4>{allEvent?.length === 0 && "No Events have!"}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
