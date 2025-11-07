import React from "react";
import "./BestOffer.css";
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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BestOffers() {
  
    const products = useSelector(products => products.CardSystem)
    const bestOffers = products.filter(product => product.bestOffer === true);

  return (
    <div className="w-100 d-flex justify-content-center align-items-center ">
      <div className="container">
        <div
          className="campaign-section d-flex flex-column flex-lg-row"
          style={{
            backgroundImage:
              'url("https://btech.com/media/homecontent/campaign/m/u/multicolor_desktop_1.webp")',
            backgroundColor: "#000000",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            borderRadius: "8px",
            position: "relative",
            backgroundSize: "contain",
          }}
        >
           

          <div className=" left_side w-100 h-100 text-white justify-content-start">
            <h1 className="w-100 title-2" style={{width: "max-width"}}>  Top offers </h1>
            <div className="w-100 d-flex justify-content-start">
            <div
              className="w-100 d-flex text-decoration-none justify-content-start"
              >
              <Link to={`/showProduct`} className="btn-common text-decoration-none btn-regular fs-5 text-start text-dark px-4 pt-1 pb-2 bg-white rounded-3">
                <p className="m-0" >  Shop Now   </p>
              </Link>
            </div>
            </div>
          </div>

             
          
          <div className="right-Side h-100 d-flex justify-content-center ">
            <div className="w-100 d-flex justify-content-between align-items-center gap-3">
              <Swiper
                freeMode={true}
                grabCursor={true}
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
                className="mySwiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  460: {
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
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1399: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
              >
                {bestOffers.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <Link to={`/productDetails/${product.id}`} className="text-decoration-none text-dark d-flex flex-column justify-content-between align-items-center bg-white px-2 py-3 rounded-3" style={{gap: "10px"}}>
                        <div className="">
                          <div
                            className="text-decoration-none text-white"
                          >
                            <img
                              className=" default_image"
                              src={`${product.mainImages}`}
                              width={"100px"}
                              height={"100px"}
                            />
                          </div>
                        </div>

                        <div className="product details product-item-details">
                          <strong className="product name product-item-name">
                            <div
                              className="d-block w-100 text-decoration-none text-dark"
                            >
                              <span
                                className="d-block w-100 text-center"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "normal",
                                  height: "73px",
                                  overflow: "hidden"
                                }}
                              >
                               {(product.title).slice(0, 90)}
                              </span>
                            </div>
                          </strong>
                        </div>

                        <div className="price-options">
                          <div className="cash">
                            <p className="as-badge m-0 fs-5 fw-bold">
                              {product.price}<span className="fs-6 ms-1"> EGP </span>
                            </p>
                          </div>
                        </div>

                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOffers;
