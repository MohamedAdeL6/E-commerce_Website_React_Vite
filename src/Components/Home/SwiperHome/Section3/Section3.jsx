// Import Styles for Section3
import "./Section3.css";
// Import Images
import sectionImages from "./Section3Images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import { Autoplay } from "swiper/modules"; // Import required modules
import "swiper/css";
import "swiper/css/free-mode"; // Import FreeMode styles

import { Link } from "react-router-dom";
import { filterBrand } from "../../../../Store/Slices/ProductFilter";
import { useDispatch } from "react-redux";

const Section3 = () => {
  const dispatch = useDispatch();
  return (
    <div className="section3 container">
      <Swiper
        modules={[Autoplay]} // Register Swiper modules
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          280: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1199: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          1399: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <Link to="/products">
          {sectionImages.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                
                <Link
                  to="/showProduct"
                  onClick={() => {
                    dispatch(
                      filterBrand(
                         image.split("/")[sectionImages.length - 1].split(".")[0] === "Acessories"
                    ? "TWS"
                    : (image.split("/")[sectionImages.length - 1].split(".")[0] === "BestPrice"
                      ? "TV"
                      : image.split("/")[sectionImages.length - 1].split(".")[0])
                      )
                    );
                  }}
                  className="text-decoration-none"
                >
                  <div className="d-flex flex-column gap-3 text-center justify-content-center align-items-center">
                    <img src={image} alt="..." width={"90%"} />
                    <span className="w-100 text-cenetr text-dark fw-bold">
                      {image.split("/")[sectionImages.length - 1].split(".")[0]}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Link>
      </Swiper>
    </div>
  );
};

export default Section3;
