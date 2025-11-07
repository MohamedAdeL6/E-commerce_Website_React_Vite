import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./SingleProductSmallMedia.css";

import {
  addProduct,
  decreaseQuantityProduct,
  increaseQuantityProduct,
} from "../../../../Store/Slices/CardSlice";

import { Container } from "react-bootstrap";

import {
  MdAdd,
  MdFavoriteBorder,
  MdHorizontalRule,
  MdSignalCellularAlt,
  MdStar,
  MdStarHalf,
} from "react-icons/md";

import ImageZoom from "react-image-zooom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SingleProductSmallMedia = () => {
  let dispatch = useDispatch();

  // Select Product From All Product With Id
  let { productID } = useParams();
  const AllProducts = useSelector((products) => products.CardSystem);
  const product = AllProducts.filter((item) => item.id === +productID)[0];

  // Get Quantity Of Product From MiniCard Slice (Card)
  const productsQuantity = useSelector((state) => state.card);
  const ProductQuantity = productsQuantity.filter(
    (item) => item.id === +productID
  );
  const quantityValue = ProductQuantity.map((item) => item.quantity);

  return (
    <Container className="pt-2">
      <div className="border border-1 product-container">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          key={product.id}
        >
          {product.secondaryImages ? (
            product.secondaryImages.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="myGallery">
                    <ImageZoom
                      className="myGalleryImg"
                      src={item.image}
                      zoom="200"
                    />
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <SwiperSlide key={product.id}>
              <div className="myGallery">
                <ImageZoom
                  className="myGalleryImg"
                  src={product.mainImages}
                  zoom="100"
                />
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        <div className="product-content">
          <div className="product-content-container">
            <div className="product-content-container-header">
              <h3> {product.title.slice(0, 70)} </h3>
            </div>

            <div className="card-rating d-flex gap-2  justify-content-start my-1 w-100">
              <div>
                {<MdStar className="text-warning" />}
                {<MdStar className="text-warning" />}
                {<MdStar className="text-warning" />}
                {<MdStar className="text-warning" />}
                {<MdStarHalf className="text-warning" />}
              </div>
              <span>
                {" "}
                {product.rating.rate}{" "}
                <span> ({product.rating.count} reviews) </span>{" "}
              </span>
            </div>

            <div className="box-price text-start w-100">
              <span className="fs-4 fw-bold d-inline-block text-start">
                {" "}
                {product.price} EGP{" "}
              </span>
            </div>

            <div className="description py-3">
              <table className="product-table">
                <tbody>
                  {product.description
                    ? Object.keys(product.description).map((item, index) => {
                        return (
                          <tr key={index}>
                            <th> {item} </th>
                            <td> {product.description[item]} </td>
                          </tr>
                        );
                      })
                    : ""}
                </tbody>
              </table>
            </div>

            <div className="block-last">
              <div className="block-last-content">
                <div className="product-quantity w-100">
                  <div className="product-quantity-input">
                    <div
                      className="product-quantity-input-icon"
                      onClick={() => dispatch(decreaseQuantityProduct(product))}
                    >
                      {" "}
                      <MdHorizontalRule />{" "}
                    </div>
                    <input
                      type="number"
                      placeholder="Qty"
                      value={quantityValue}
                      readOnly
                    />
                    <div
                      className="product-quantity-input-icon"
                      onClick={() => dispatch(increaseQuantityProduct(product))}
                    >
                      {" "}
                      <MdAdd />{" "}
                    </div>
                  </div>
                </div>

                <div className="product-quantity-icon w-100">
                  <div
                    className="btn-add btn"
                    onClick={() => dispatch(addProduct(product))}
                  >
                    ADD PRODUCT
                  </div>

                  <div className="product-icon ">
                    <div className="product-icon-heart">
                      <MdFavoriteBorder />
                    </div>
                    <div className="product-icon-signal">
                      <MdSignalCellularAlt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductSmallMedia;
