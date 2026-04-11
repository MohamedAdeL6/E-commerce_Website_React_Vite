// import { CgShoppingCart, CgHeart } from "react-icons/cg";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../../../../Store/Slices/CardSlice";
// import { Link } from "react-router-dom";
// import "./SwiperCard.css";
// import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";

// const ProductCard = ({ product }) => {


//   const dispatch = useDispatch();

//   return (
//     <Container className="p-2 justify-content-center">

//       <div className="card-box">

//         <div className="card-header-content">

//           <div className="card-header-box p-0 d-flex justify-content-between">
//             <div

//               className="offer border rounded-2 d-flex gap-1"
//               style={{ fontSize: "11px", padding: "2px 6px" }}
//             >
//               <span>  OFF </span>
//               <span>
//                 {" "}
//                 {Object.prototype.hasOwnProperty.call(product, "discount")
//                   ? Number(product.discount)
//                   : ""}{" "}
//                 %
//               </span>
//             </div>
//             <span className="py-1 px-2 bg-success rounded-3 text-white" style={{ fontSize: "13px" }}> charge Free </span>
//             <CgHeart className="offer-icon " />
//           </div>


//         </div>

//         <Link to={`/productDetails/${product.id}`} className="">
//           <div className="card-img-box">
//             <img src={product.mainImages} alt="..." />
//           </div>
//         </Link>

//         <div className="card-body-box gap-1">
//           <div className="w-100 card-body-title"> {product.type} </div>
//           <div className="w-100 card-body-text overflow-hidden" style={{ height: "45px" }}>
//             {" "}
//             {product.title.slice(0, 42)}....{" "}
//           </div>
//           <div className="w-100 card-body-price">{product.price} EGP</div>
//           <div className="w-100 btn-box pt-2 border-top border-primary mt-1">
//             <div
//               className="w-100 btn-content btn btn-outline-info bg-info rounded-3 text-dark"
//               style={{ fontSize: "15px" }}
//               onClick={() => {
//                 dispatch(addProduct(product));
//               }}
//             >
//               ADD To Card
//               <CgShoppingCart className="btn-content-icon fs-5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };


// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     discount: PropTypes.number, // optional field
//     mainImages: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ProductCard;


import { CgShoppingCart, CgHeart } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Store/Slices/CardSlice";
import { Link } from "react-router-dom";
import "./SwiperCard.css";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Container className="p-2 justify-content-center">
      <div className="card-box">
        <div className="card-header-content">
          <div className="card-header-box p-0 d-flex justify-content-between">
            <div
              className="offer border rounded-2 d-flex gap-1"
              style={{ fontSize: "11px", padding: "2px 6px" }}
            >
              <span>OFF</span>
              <span>
                {Object.prototype.hasOwnProperty.call(product, "discount")
                  ? Number(product.discount)
                  : ""}
                %
              </span>
            </div>
            <span
              className="py-1 px-2 bg-success rounded-3 text-white"
              style={{ fontSize: "13px" }}
            >
              charge Free
            </span>
            <CgHeart className="offer-icon" />
          </div>
        </div>

        <Link to={`/productDetails/${product.id}`} className="">
          <div className="card-img-box">
            <img src={product.mainImages} alt="..." />
          </div>
        </Link>

        <div className="card-body-box gap-1">
          <div className="w-100 card-body-title">{product.type}</div>
          <div
            className="w-100 card-body-text overflow-hidden"
            style={{ height: "45px" }}
          >
            {product.title.slice(0, 42)}....
          </div>
          <div className="w-100 card-body-price">{product.price} EGP</div>
          <div className="w-100 btn-box pt-2 border-top border-primary mt-1">
            <div
              className="w-100 btn-content btn btn-outline-info bg-info rounded-3 text-dark"
              style={{ fontSize: "15px" }}
              onClick={() => {
                dispatch(addProduct(product));
              }}
            >
              ADD To Card
              <CgShoppingCart className="btn-content-icon fs-5" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};


ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // ✅ FIXED LINE
    mainImages: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

