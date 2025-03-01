import { useRef } from "react";
import { Container } from "react-bootstrap";
import {
  MdAdd,
  MdFavoriteBorder,
  MdHorizontalRule,
  MdSignalCellularAlt,
  MdStar,
  MdStarHalf,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import "./SingleProductLargeMedia.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  decreaseQuantityProduct,
  increaseQuantityProduct,
} from "../../../../Store/Slices/CardSlice";

import ReactImageMagnify from "react-image-magnify";
import { useEffect } from "react";
import { useState } from "react";

const SingleProductLargeMedia = () => {
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

  // Select Element To Change Image
  let ChangeImages = useRef();

  function ChangeImage(image) {
    ChangeImages.current.smallImageEl.src = image;
    ChangeImages.current.props.largeImage.src = image;
    ChangeImages.current.props.smallImage.src = image;
  }

  // Change Width and Height Of Image In Media Query
  const [widthImage, setWidthImage] = useState(0);
  const [heightImage, setHeightImage] = useState(617);
  const updateColor = () => {
    if (window.matchMedia("(max-width: 260px)").matches) {
      setWidthImage(180);
      setHeightImage(450);
    } else if (
      window.matchMedia("(min-width: 261px) and (max-width: 350px)").matches
    ) {
      setWidthImage(260);
      setHeightImage(350);
    } else if (
      window.matchMedia("(min-width: 351px) and (max-width: 400px)").matches
    ) {
      setWidthImage(290);
      setHeightImage(400);
    } else if (
      window.matchMedia("(min-width: 400px) and (max-width: 470px)").matches
    ) {
      setWidthImage(350);
      setHeightImage(445);
    } else if (
      window.matchMedia("(min-width: 470px) and (max-width: 574px)").matches
    ) {
      setWidthImage(400);
      setHeightImage(410);
    } else if (
      window.matchMedia("(min-width: 575px) and (max-width: 767px)").matches
    ) {
      setWidthImage(380);
      setHeightImage(560);
    } else if (
      window.matchMedia("(min-width: 768px) and (max-width: 992px)").matches
    ) {
      setWidthImage(450);
      setHeightImage(520);
    } else if (
      window.matchMedia("(min-width: 993px) and (max-width: 1199px)").matches
    ) {
      setWidthImage(425);
      setHeightImage(545);
    } else if (
      window.matchMedia("(min-width: 1199px) and (max-width: 1399px)").matches
    ) {
      setWidthImage(510);
      setHeightImage(540);
    } else if (window.matchMedia("(min-width: 1399px)").matches) {
      setWidthImage(590);
      setHeightImage(540);
    }
  };

  // Run the updateColor function initially and when window resizes
  useEffect(() => {
    updateColor(); // Initial call
    window.addEventListener("resize", updateColor); // Update on resize
    return () => {
      window.removeEventListener("resize", updateColor); // Clean up listener
    };
  }, []);

  return (
    <Container className=" pt-4 pb-3">
      <div className="Large_media">
        <div className="Product_container">
          <div className="product_Images">
            <div className="product_Images_Right">
              {product.secondaryImages ? (
                product.secondaryImages.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={item.image}
                        alt="..."
                        onClick={() => ChangeImage(item.image)}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="">
                  {" "}
                  <img
                    src={product.mainImages}
                    alt="..."
                    onClick={() => ChangeImage(product.mainImages)}
                  />{" "}
                </div>
              )}
            </div>

            <div className="product_Images_Left">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    height: heightImage,
                    width: widthImage,
                    src: product.mainImages,
                    imageClassName: "my-custom-class",
                  },
                  largeImage: {
                    src: product.mainImages,
                    width: 1800,
                    height: 2800,
                  },
                }}
                ref={ChangeImages}
              />
            </div>
          </div>

          <div className="product-content">
            <div className="product-content-container">
              <div className="product-content-container-header">
                <h3 className="m-0"> {product.title.slice(0, 70)} </h3>
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

              <div className="description">
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
                        onClick={() =>
                          dispatch(decreaseQuantityProduct(product))
                        }
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
                        onClick={() =>
                          dispatch(increaseQuantityProduct(product))
                        }
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
      </div>
    </Container>
  );
};

export default SingleProductLargeMedia;

/*
<ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",

              height: 800,
              width: 400,
              src: image,
            },
            largeImage: {
              src: image,
              width: 1400,
              height: 2200,
            },
          }}
        />



*/
