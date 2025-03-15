import React from "react";
import Navigation from "./components/NavigationBar/Navigation";
import BannerSection from "./components/BannerSection/BannerSection";
import NewArrivals from "./components/Sections/NewArrivals";
import content from "./data/content.json";
import Category from "./components/Sections/Categories/Categories";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navigation/>
      <BannerSection/>
      <NewArrivals/>
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title + index} {...item}/>)}
      <Footer footer={content?.footer}/>
    </>
    
  )
}

export default App;