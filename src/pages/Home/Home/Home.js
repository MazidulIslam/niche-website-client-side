import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import HomeCycles from "../HomeCycles/HomeCycles";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner />
      <HomeCycles />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
