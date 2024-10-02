import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import TrackOrder from "../components/profile/TrackOrder";

const TrackOrderPage = () => {
  return (
    <div>
      <Header />
      <TrackOrder />
      <Footer />
    </div>
  );
};

export default TrackOrderPage;
