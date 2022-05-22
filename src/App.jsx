import React from "react";
import Header from "./components/Header";
import ReuseableComponent from "./components/ReuseableComponent";

const App = () => {
  return (
    <>
      <Header />
      <ReuseableComponent
        backgroundImg="/model-3.jpg"
        heading="Model 3"
        paragraph="Order Online for Touchless Delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
      />
      <ReuseableComponent
        backgroundImg="/model-y.jpg"
        heading="Model Y"
        paragraph="Order Online for Touchless Delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
      />
      <ReuseableComponent
        backgroundImg="/model-s.jpg"
        heading="Model S"
        paragraph="Order Online for Touchless Delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
      />
      <ReuseableComponent
        backgroundImg="/model-x.jpg"
        heading="Model X"
        paragraph="Order Online for Touchless Delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
      />
      <ReuseableComponent
        backgroundImg="/solar-panel.jpg"
        heading="Solar Panels"
        paragraph="Lowest Cost Solar Panels in America"
        btn1="ORDER NOW"
        btn2="LEARN MORE"
      />
      <ReuseableComponent
        backgroundImg="/solar-roof.jpg"
        heading="Solar Roof"
        paragraph="Lowest Cost Solar Panels in America"
        btn1="Custom Order"
        btn2="Existing Inventory"
      />
      <ReuseableComponent
        backgroundImg="/accessories.jpg"
        heading="Accessories"
        btn2="SHOP NOW"
      />
    </>
  );
};

export default App;
