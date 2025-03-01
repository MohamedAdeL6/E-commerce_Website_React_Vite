import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import images from "./BannerImages";
import "./SwiperBanner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import { Autoplay, Pagination, Navigation, } from "swiper/modules"; // Import required modules
import "swiper/css";
import "swiper/css/free-mode"; // Import FreeMode styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperBanner = () => {
  return (
    <Container>
      <div className="banner_container">
        <Swiper
          freeMode={true}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={5}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <Link to="/products">
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="img-box">
                    <img src={image} alt="..." />
                  </div>
                </SwiperSlide>
              );
            })}
          </Link>
        </Swiper>
      </div>
    </Container>
  );
};

export default SwiperBanner;
