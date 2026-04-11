import { useEffect, useMemo, useState } from "react";
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
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const SingleProductSmallMedia = () => {
  const dispatch = useDispatch();

  // Select Product From All Product With Id
  const { productID } = useParams();
  const AllProducts = useSelector((products) => products.CardSystem);
  const product = useMemo(
    () => AllProducts.find((item) => item.id === +productID),
    [AllProducts, productID]
  );

  // Get Quantity Of Product From MiniCard Slice (Card)
  const productsQuantity = useSelector((state) => state.card);
  const quantityValue = useMemo(
    () =>
      productsQuantity.find((item) => item.id === +productID)?.quantity ?? 1,
    [productsQuantity, productID]
  );
  const galleryImages = useMemo(() => {
    if (!product) return [];
    if (Array.isArray(product.secondaryImages) && product.secondaryImages.length) {
      return product.secondaryImages.map((item) => item.image);
    }
    return [product.mainImages];
  }, [product]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(galleryImages[0] || "");
  }, [galleryImages, productID]);

  if (!product) return null;

  return (
    <Container className="pt-2">
      <div className="border border-1 product-container">
        <div className="smallGalleryLayout">
          <div className="smallGalleryThumbs">
            {galleryImages.map((image, index) => (
              <button
                key={`${product.id}-${index}`}
                type="button"
                className={`smallThumbButton ${
                  selectedImage === image ? "active" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`${product.title} thumb ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="myGallery">
            <InnerImageZoom
              src={selectedImage || galleryImages[0]}
              zoomSrc={selectedImage || galleryImages[0]}
              zoomType="hover"
              zoomScale={1.4}
              hasSpacer
              hideHint
              alt={product.title}
              className="myGalleryImg"
            />
          </div>
        </div>

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
