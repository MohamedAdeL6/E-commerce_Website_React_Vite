import { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearAllCard } from "../../../../Store/Slices/CardSlice";
import { ImBin } from "react-icons/im";
import { FaCcVisa } from "react-icons/fa";
import {MdOutlinePriceCheck} from 'react-icons/md'
import "./ViewMiniCart.css";
import TableProduct from "./TableProduct";
import TableReverse from "./TableReverse";
import { Link } from "react-router-dom";

const ViewMiniCart = () => {
  const products = useSelector((state) => state.card);

  const dispatch = useDispatch();

  // Get Total Price
  const TotalPrice = products.map((item) => {
    return +item.price * item.quantity;
  }, 0);
  const total =
    TotalPrice.length > 0 ? TotalPrice.reduce((acu, curr) => (acu += curr)) : 0;

  // Show Table in media query width 767px
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth <= 992) {
        setShowTable(true);
      } else {
        setShowTable(false);
      }
    };
  }, []);

  return (
    <div className="ViewCart">
      <div className="container">
        <h1 className="header-text my-5 text-center text-info"> Welcome To Product Card </h1>

        <div className="cart-container">
          <div className="product-Buttons">
            <div className="clear-box-button">
              <ImBin className="clear-icon" />
              <Button
                className="clear-btn"
                onClick={() => dispatch(clearAllCard())}
              >
                {" "}
                Clear All Products{" "}
              </Button>
            </div>

            <div className="total-price-button align-items-center">
              <MdOutlinePriceCheck className="clear-icon"/>
              <p className="total-price-button-text m-0">
                Total Price : {total.toFixed(2)} EGP
              </p>
            </div>

            <Link to="/payment" className="pay-box-button">
              <FaCcVisa className="clear-icon" />
              <Button
                className="clear-btn"
                onClick={() => dispatch(clearAllCard())}
              >
                {" "}
                Payment Now{" "}
              </Button>
            </Link>
          </div>

          <div className="table-container">
            {showTable ? <TableReverse /> : <TableProduct />}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ViewMiniCart;
