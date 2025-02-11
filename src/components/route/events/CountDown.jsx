import React, { useState, useEffect } from "react";

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date(targetDate);
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]} {interval}
      </span>
    );
  });

  return (
    <div className="text-[red] text-[25px]">
      {timerComponents.length ? timerComponents : <span>Event has passed!</span>}
    </div>
  );
};

export default CountDown;
