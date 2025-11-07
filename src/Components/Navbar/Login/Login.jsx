import { useRef, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import image from "./Image/360_F_485670840_Ai4Rz09r0DmHlJycECZk23LVaocea4ZI.jpg";

import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { BiHide, BiShowAlt } from "react-icons/bi";

const Login = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [type, setType] = useState("password");

  const showPassword = () => {
    showIcon === false ? setShowIcon(true) : setShowIcon(false);
    type === "password" ? setType("text") : setType("password");
  };

  const email = useRef();
  const password = useRef();

  const validationForm = (e) => {
    if (email.current.value === "" || password.current.value === "") {
      e.preventDefault();
    }
  };

  return (
    <div className=" sign-container container" style={{height:"calc(100vh - 118px)"}}>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <div className="login-box-content d-flex flex-wrap gap-3">
          <div className="image-container">
            <img src={image} alt="..." />
          </div>

          <form className="w-100" onSubmit={(e) => validationForm(e)}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
                ref={email}
              />
              <span className="icon">
                {" "}
                <HiOutlineMail />{" "}
              </span>
            </div>

            <div className="mb-3">
              <input
                type={type}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                ref={password}
              />
              <span className="icon">
                {" "}
                <HiOutlineLockClosed />{" "}
              </span>
              <span className="hidePassword" onClick={() => showPassword()}>
                {" "}
                {showIcon ? <BiShowAlt /> : <BiHide />}{" "}
              </span>
            </div>

            <div className="my-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                {" "}
                Remebmer me{" "}
              </label>
            </div>

            <div className="mb-4 w-100 d-flex">
              <button type="submit" className="btn btn-primary ">
                {" "}
                Sign in{" "}
              </button>
              <div>
                <Link
                  to="/forgetPassword"
                  className="forgetPass text-decoration-none text-danger"
                >
                  {" "}
                  Forget password ?{" "}
                </Link>
              </div>
            </div>

            <div className=" form-check p-0 d-flex">
              <div className="w-100 d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center">
                <span className=" d-inline-block me-4 ">
                  {" "}
                  I don&apos;t have account{" "}
                </span>
                <Link to="/sign" className="p-2 btn btn-outline-danger">
                  {" "}
                  Create new account ?{" "}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
