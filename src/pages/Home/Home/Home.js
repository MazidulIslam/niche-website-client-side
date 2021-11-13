import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HomeCycles from "../HomeCycles/HomeCycles";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner />
      <HomeCycles />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
