
import { BiHide, BiShowAlt } from "react-icons/bi";
import imagePayment from "./Payment-Image/background1.jpg";
import "./Payment.css";
import { ImPencil } from "react-icons/im";
import { useRef, useState } from "react";

const Payment = () => {


  const [type, setType] = useState("password");

  const [showConfirmIcon, setShowConfirmIcon] = useState(false);

  const confirmPassword = useRef();

  const showConfirmPassword = () => {
     showConfirmIcon === false
       ? setShowConfirmIcon(true)
       : setShowConfirmIcon(false);
     type === "password" ? setType("text") : setType("password");
   };


  const empty = (e) => {
    if (e.target.value !== "") {
      e.target.style.backgroundImage = "none";
    } else {
      return false;
    }
  };

  return (
    <div className="payment">
      <div className="container">
        <div className="payment_box">
          <form className="form" onClick={(e) => e.preventDefault()}>
            
            <div className="input-box input-idCard d-flex flex-wrap align-items-center  my-lg-1">
              <div className="input-header d-flex gap-2 justify-content-between w-100">
                <div className="input-header-idCard pe-3">
                  <label htmlFor="idCard"> Card Number : </label>
                  <span> Enter The 3 digit card number on the card </span>
                </div>

                <div className="btn-edit btn text-primary d-flex align-items-center fs-4 gap-3 p-0">
                  <ImPencil />
                  <button className="btn btn-outline-primary fs-5">
                    {" "}
                    Edit{" "}
                  </button>
                </div>
              </div>
              <div className="input-content d-flex w-100">
                <input
                  className="input idCard"
                  type="number"
                  onBlur={(e) => empty(e)}
                />
              </div>
            </div>

            <div className="input-box input-cvv  my-lg-1">
              <div className="input-header">
                <label htmlFor="cvv"> CVV Number : </label>
                <span> Enter The 3 digit card number on the card </span>
              </div>
              <div className="input-content">
                <input id="input cvv" type="number" placeholder="Hello" />
              </div>
            </div>

            <div className="input-box input-expireDate  my-lg-1">
              <div className="input-header">
                <label htmlFor="expireDate"> Expiry Date : </label>
                <span> Enter The 3 Expiration date of the card </span>
              </div>
              <div className="input-content input-content-expireDate">
                <input id="expireDate" type="number" placeholder="00" />
                <div className="slash"> / </div>
                <input id="input" type="number" placeholder="Quantity" />
              </div>
            </div>

            <div className="input-box input-password ">
              <div className="input-header">
                <label htmlFor="password"> Password : </label>
                <span> Enter Your dynamic password </span>
              </div>
              <div className="input-content position-relative">
                <input
                type={type}
                  className=" input password"
                  placeholder=""
                  ref={confirmPassword}
                />
                <span
                  className="showPassword"
                  onClick={() => showConfirmPassword()}
                >
                  {" "}
                  {showConfirmIcon ? <BiShowAlt /> : <BiHide />}{" "}
                </span>
              </div>
            </div>

            <div className="input-pay w-100 d-flex justify-content-start">
              <input type="submit" value="Payment Now" />
            </div>
          </form>

          <div className="payment_image">
            <div className="">
              <img src={imagePayment} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
