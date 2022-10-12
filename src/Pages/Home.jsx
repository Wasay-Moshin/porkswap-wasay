import React from "react";
import Hero from "../Component/Elements/Hero";
import Seen from "../Component/Elements/Seen";
import Features from "../Component/Elements/Features";
import Coins from "../Component/Elements/Coins";
import Work from "../Component/Elements/Work";
import Interface from "../Component/Elements/Interface";
import Utilities from "../Component/Elements/Utilities";
import Comparison from "../Component/Elements/Comparison";
import Roadmap from "../Component/Elements/Roadmap";
import Faqs from "../Component/Utils/Faqs";
function Home() {
  return (
    <div>
      <Hero />
      <Seen/>
      <Features/>
      <Coins/>
      <Work/>
      <Interface/>
      <Utilities/>
      <Comparison/>
      <Roadmap/>
      <Faqs/>
    </div>
  );
}

export default Home;
