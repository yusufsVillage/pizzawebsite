import React from "react";
import Carousel from "../../Components/Layout/carousel";
import Campaigns from "../../Components/UI/campaigns";
import MenuWrapper from "../../Components/Product/menuWrapper";
import About from "../../Components/about";
import Reservation from "../../Components/reservation";
import Customers from "../../Components/Customers/customer";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
