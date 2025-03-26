import React from "react";
import BannerSection from "./components/BannerSection/BannerSection";
import NewArrivals from "./components/Sections/NewArrivals";
import content from "./data/content.json";
import Category from "./components/Sections/Categories/Categories";
import './App.css'

const App = () => {
  return (
    <>
      <BannerSection/>
      <NewArrivals/>
      {content?.sections && content?.sections?.map((item, index) => <Category key={item?.title + index} {...item}/>)}
    </>
    
  )
}

export default App;