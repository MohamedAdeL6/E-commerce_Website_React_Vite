import { useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { filterBrand } from "../../../../../Store/Slices/ProductFilter";
import "./Brand.css";

const Brand = () => {
  const products = useSelector((products) => products.CardSystem);

  const dispatch = useDispatch();

  const refBrandContent = useRef();
  const refBrandHeaderMinus = useRef();
  const refBrandHeaderPlus = useRef();
  const checkBox = useRef();

  const handleBrand = () => {
    refBrandContent.current.classList.toggle("active");
    refBrandHeaderMinus.current.classList.toggle("active");
    refBrandHeaderPlus.current.classList.toggle("hidden");
  };

  const productData = products.map((product) => {
    return product.category;
  });

  const uniqueProductData = productData.filter(
    (product, index) => productData.indexOf(product) === index
  );

  return (
    <div className="Brand">
        <div className="Brand-container px-3">
          <div className="Brand-header" onClick={() => handleBrand()}>
            <span className="title"> Brand </span>
            <span className="plus" ref={refBrandHeaderPlus}>
              {" "}
              <AiOutlinePlus />{" "}
            </span>
            <span className="minus" ref={refBrandHeaderMinus}>
              {" "}
              <AiOutlineMinus />{" "}
            </span>
          </div>
          <div className="Brand-Content hidden" ref={refBrandContent}>
            <ol className="filter-list">
              {uniqueProductData.map((product) => {

                console.log(product);
                
                return (
                  <li className="filter-Brand-item" key={product}>
                    <input
                      type="radio"
                      id={product}
                      name="mobiles"
                      ref={checkBox}
                      onClick={() => dispatch(filterBrand(product))}
                    />
                    <label htmlFor={product} className="label">
                      <a
                        href="##"
                        className="filter-Brand-item-link"
                        id="vehicle1"
                      >
                        <span className="label"> {product} </span>
                        {/* <span className="count"> ({product.rating.rate}) </span> */}
                      </a>
                    </label>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
    </div>
  );
};

export default Brand;
