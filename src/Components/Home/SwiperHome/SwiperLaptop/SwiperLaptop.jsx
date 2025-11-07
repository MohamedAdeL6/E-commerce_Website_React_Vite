// import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import { Autoplay } from "swiper/modules"; // Import required modules
import "swiper/css";
import "swiper/css/free-mode"; // Import FreeMode styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image from "./LaptopsImage/laptop.png"
import ProductCard from "../SwipersCard/ProductCard";
import "./SwipperLaptop.css"
const SwiperLaptop = () => {
  const products = useSelector((products) => products.CardSystem);

  const Laptops = products.filter((laptop) => {
    return laptop.category === "laptops";
  });

  return (
    <Container className="justify-content-center">
      <div className="shadow-lg rounded-2 border">
        <div className="box-image-laptop w-100 h-100 p-2">
          <img src={image} alt="..." className="rounded-2 w-100"  />
        </div>
        <div>
          <Swiper
           freeMode={true}
           grabCursor={true}
           modules={[Autoplay]} // Register Swiper modules
           slidesPerView={1}
           spaceBetween={5}
           loop={true}
           speed={1500}
           autoplay={{
             delay: 1100,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              575: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1399: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {Laptops.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default SwiperLaptop;
