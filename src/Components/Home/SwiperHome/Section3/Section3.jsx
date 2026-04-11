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

/**
 * Same order as Section3Images.jsx. Index-based mapping avoids:
 * 1) `split("/")[sectionImages.length-1]` → undefined when the URL has fewer segments (crash on GitHub Pages).
 * 2) Vite content hashes in filenames (e.g. Laptops-a1b2.webp) breaking string matches vs ProductsData categories.
 */
const SLIDE_FILTER_CATEGORY = [
  "laptops",
  "mobiles",
  "Charges",
  "TV",
  "TWS",
  "Storage",
  "TWS",
  "Watches",
  "TV",
];

const SLIDE_LABELS = [
  "Laptops",
  "Mobiles",
  "Charges",
  "TV",
  "TWS",
  "Storage",
  "Accessories",
  "Watches",
  "Best price",
];

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
            const filterKey =
              SLIDE_FILTER_CATEGORY[index] ?? "mobiles";
            const label = SLIDE_LABELS[index] ?? "Products";
            return (
              <SwiperSlide key={index}>
                <Link
                  to="/showProduct"
                  onClick={() => {
                    dispatch(filterBrand(filterKey));
                  }}
                  className="text-decoration-none"
                >
                  <div className="d-flex flex-column gap-3 text-center justify-content-center align-items-center">
                    <img src={image} alt={label} width={"90%"} />
                    <span className="w-100 text-cenetr text-dark fw-bold">
                      {label}
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
