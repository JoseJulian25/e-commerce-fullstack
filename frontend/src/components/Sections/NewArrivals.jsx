import React from "react";
import SectionHeading from "./SectionHeading/SectionHeading";
import Card from "../Card/Card";
import pants from "../../assets/img/pants.webp";
import jacket from "../../assets/img/jacket.webp";
import skirt from "../../assets/img/skirt.webp";
import sweater from "../../assets/img/sweater.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../utils/Sections.constants";

const items = [
  {
    title: "Jeans",
    imagePath: pants,
  },
  {
    title: "Jacket",
    imagePath: jacket,
  },
  {
    title: "Skirt",
    imagePath: skirt,
  },
  {
    title: "sweater",
    imagePath: sweater,
  },
  {
    title: "Jeans",
    imagePath: pants,
  },
  {
    title: "sweater",
    imagePath: sweater,
  },
];

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"Novedades"} />
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="ml-10 mr-10"
      >
        {items &&
          items?.map((item, index) => (
            <Card
              key={item?.title + index}
              title={item.title}
              imagePath={item.imagePath}
            />
          ))}
      </Carousel>
    </>
  );
};

export default NewArrivals;
