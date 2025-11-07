import { useRef } from "react";
import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";
import "./MiniCart.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../Store/Slices/CardSlice";

const MiniCart = () => {
  const products = useSelector((state) => state.card);

  const dispatch = useDispatch();

  const updateBtn = useRef();

  const inputValue = useRef();

  const showUpdateBtn = (e) => {
    e.target.value > 0
      ? updateBtn.current.classList.remove("d-none")
      : updateBtn.current.classList.add("d-none");
  };

  const hideUpdateBtn = (e) => {
    e.target.classList.add("d-none");
    inputValue.current.value = "";
  };

  const totalPrice = () => {
    let total = 0;
    products.map((product) => {
      return (total += +product.price * +product.quantity);
    });
    return total.toFixed(2);
  };

  return (
    <div className="miniCart">
      <div className="miniCart-content h-100  d-flex flex-wrap justify-content-around">
        {products.length > 0 ? (
          <>
            <div className="block-top d-flex flex-wrap gap-4">
              <div className="subtotal w-100 pt-3">
                <div className="item-total d-flex justify-content-between align-items-center p-3 lh-1 gap-3">
                  <div className="item-total-price">
                    <span className="d-inline-block mb-2"> Cart Subtotal : </span>
                    <span className="price fs-5 fw-bold">
                      {" "}
                      {totalPrice()} EGP{" "}
                    </span>
                  </div>
                  <div className="item-total-mount d-flex justify-content-center align-items-center gap-1">
                    <span className="fs-5 fw-bold"> {products.length} </span>
                    <span className="fs-6 fw-bold opacity-75"> items </span>
                  </div>
                </div>
              </div>

              <div className="actions-primary d-flex justify-content-center w-100">
                <Link
                  to="/payment"
                  className="btn btn-outline-warning w-75 d-flex justify-content-center align-items-center"
                >
                  {" "}
                  GO TO CHECKOUT{" "}
                </Link>
              </div>
            </div>

            <div className="mt-3 px-3 pt-3 border-top ">
              <ol
                className="miniCart-items list-unstyled mb-0 overflow-y-auto"
                style={{ height: "157px" }}
              >
                {products.map((product) => {
                  return (
                    <li
                      className="item py-4 border-bottom"
                      key={Math.random() * 11}
                    >
                      <div className="product d-flex">
                        <div className="product-item-photo w-25">
                          <img
                            src={product.mainImages}
                            alt="..."
                          />
                        </div>
                        <div className="product-item-details d-flex flex-wrap gap-1 w-75 text-start">
                          <div className="product-item-title w-100">
                            <h6 className="fw-bold">
                              {product.type.slice(0, 41)}{" "}
                              {Object.keys(product).includes("Internal memory")
                                ? product.description["Internal memory"]
                                : ""}{" "}
                            </h6>
                          </div>
                          <div className="d-flex justify-content-between  w-100">
                            <h4 className="fw-bold">{product.price} EGP</h4>
                          </div>

                          <div className="quantity w-100 d-flex gap-1 justify-content-between">
                            <div className="d-flex gap-2 align-items-center ">
                              <label className="label fs-6 fw-bold opacity-50">
                                {" "}
                                Qty:{" "}
                              </label>
                              <input
                                type="number"
                                className="form-control p-1 text-center"
                                style={{ width: "37px" }}
                                value={product.quantity}
                                onChange={(e) => showUpdateBtn(e)}
                                ref={inputValue}
                              />
                              <div
                                className=" border-1 d-none text-dark"
                                style={{
                                  fontSize: "12px",
                                  padding: "15px 10px",
                                }}
                                ref={updateBtn}
                                onClick={(e) => {
                                  hideUpdateBtn(e);
                                }}
                              >
                                {" "}
                                Update{" "}
                              </div>
                            </div>

                            <div className="product-action d-flex gap-3 align-items-center text-warning">
                              <Link
                                to={`/productDetails/${product.id}`}
                                className="primary-edit "
                              >
                                <MdModeEditOutline className="fs-5 text-warning" />
                              </Link>
                              <div className="secondary-delete">
                                <MdDeleteForever
                                  className="fs-5"
                                  onClick={() =>
                                    dispatch(deleteProduct(product.id))
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="d-flex justify-content-center align-items-center w-100 ">
              <Link to="/cart" className="btn btn-outline-warning w-75 px-3 py-2">
                {" "}
                View and edit cart{" "}
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="w-100 d-flex justify-content-center align-items-center px-2">
              <p className="last-parag border border-danger rounded-2 py-2 text-center">
                {" "}
                You have no items in your shopping cart.{" "}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
