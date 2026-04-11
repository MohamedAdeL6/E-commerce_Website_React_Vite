import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import {
  MdAdd,
  MdFavoriteBorder,
  MdHorizontalRule,
  MdSignalCellularAlt,
  MdStar,
  MdStarHalf,
  MdZoomIn,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import "./SingleProductLargeMedia.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  decreaseQuantityProduct,
  increaseQuantityProduct,
} from "../../../../Store/Slices/CardSlice";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const SingleProductLargeMedia = () => {
  const dispatch = useDispatch();
  const productContainerRef = useRef(null);
  const productContentRef = useRef(null);
  const iizRef = useRef(null);

  const handleZoomHintClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const fig = iizRef.current?.container;
    if (!fig) return;
    const rect = fig.getBoundingClientRect();
    const clientX = rect.left + rect.width / 2;
    const clientY = rect.top + rect.height / 2;
    const view = fig.ownerDocument?.defaultView ?? window;
    const opts = {
      bubbles: true,
      cancelable: true,
      clientX,
      clientY,
      view,
    };
    const isZoomed = Boolean(fig.querySelector(".iiz__zoom-img--visible"));
    if (isZoomed) {
      fig.dispatchEvent(new MouseEvent("click", { ...opts, button: 0 }));
    } else {
      fig.dispatchEvent(new MouseEvent("mouseenter", opts));
    }
  }, []);

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
    <Container className=" pt-4 pb-4">
      <div className="Large_media">
        <div className="Product_container" ref={productContainerRef}>
          <div className="product_Images">
            <div className="product_Images_Right">
              <div className="thumbsList">
                {galleryImages.map((image, index) => (
                  <button
                    key={`thumb-${product.id}-${index}`}
                    type="button"
                    className={`thumbButton ${selectedImage === image ? "active" : ""
                      }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`${product.title} thumb ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product_Images_Left">
              <div className="product_Images_zoomWrap">
                <button
                  type="button"
                  className="product-zoom-hint"
                  title="Click or hover to zoom"
                  aria-label="Click or hover image to zoom in"
                  onClick={handleZoomHintClick}
                >
                  <MdZoomIn aria-hidden />
                </button>
                <InnerImageZoom
                  ref={iizRef}
                  src={selectedImage || galleryImages[0]}
                  zoomSrc={selectedImage || galleryImages[0]}
                  zoomType="hover"
                  zoomScale={1.5}
                  hasSpacer
                  hideHint
                  alt={product.title}
                />
              </div>
            </div>
          </div>

          <div className="product-content" ref={productContentRef}>
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
