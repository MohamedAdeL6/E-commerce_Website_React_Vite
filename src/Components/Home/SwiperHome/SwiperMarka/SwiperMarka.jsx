import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "./MarkaImages";
import "./SwiperMarka.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import { Autoplay, Navigation } from "swiper/modules"; // Import required modules
import "swiper/css";
import "swiper/css/free-mode"; // Import FreeMode styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperMarka = () => {
  return (
    <Container className="justify-content-center mb-5">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[Autoplay, Navigation]} // Register Swiper modules
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 1300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper position-relative py-3"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
      {images.map((image, index) => {
        return (
          <SwiperSlide
          key={index}
          className="border border-warning rounded-2"
          >
          <Link to="/showProduct" className="d-flex justify-content-center">
                <img
                  src={image}
                  alt="..."
                  style={{ width: "120px", height: "90px" }}
                />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default SwiperMarka;





/*



import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "./MarkaImages";
import "./SwiperMarka.css";
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

const SwiperMarka = () => {
  return (
    <Container className="justify-content-center mb-3">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[Autoplay]} // Register Swiper modules
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper position-relative py-3"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
              className="border border-warning rounded-2"
            >
              <Link to="/showProduct" className="d-flex justify-content-center">
                <img
                  src={image}
                  alt="..."
                  style={{ width: "120px", height: "90px" }}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SwiperMarka;




*/
