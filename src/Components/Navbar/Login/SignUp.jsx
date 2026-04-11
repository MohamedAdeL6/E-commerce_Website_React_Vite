import { useRef, useState } from "react";
import "./Login.css";
import googleImage from "./Image/google.png";
import facebookImage from "./Image/fb.png";
import userImage from "./Image/360_F_485670840_Ai4Rz09r0DmHlJycECZk23LVaocea4ZI.jpg";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const SignUp = () => {
  const firstName = useRef();
  const lastName = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const email = useRef();
  const terms = useRef();

  const [type, setType] = useState("password");
  const [showIcon, setShowIcon] = useState(false);
  const [showConfirmIcon, setShowConfirmIcon] = useState(false);

  const showPassword = () => {
    showIcon === false ? setShowIcon(true) : setShowIcon(false);
    type === "password" ? setType("text") : setType("password");
  };

  const showConfirmPassword = () => {
    showConfirmIcon === false
      ? setShowConfirmIcon(true)
      : setShowConfirmIcon(false);
    type === "password" ? setType("text") : setType("password");
  };

  /* ------ if use checkbox showPassword use this function  --------------
  const [showPassword, setShowPassword] = useState(false)
  const showPass = (e) => {
    setShowPassword(true) 
  }--------------------------
  */

  const validateForm = (e) => {
    if (
      firstName.current.value === "" ||
      lastName.current.value === "" ||
      password.current.value === "" ||
      confirmPassword.current.value === "" ||
      email.current.value === "" ||
      terms.current.checked === false
    ) {
      e.preventDefault();
    } else {
      return true;
    }
  };
  return (
    <div className="container text-start"  style={{height:"calc(100vh - 118px)"}}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="border border-1 d-flex flex-wrap flex-lg-nowrap">
          <form onSubmit={(e) => validateForm(e)}>
            <div>
              <div className="mb-3 mb-sm-0">
                <label
                  htmlFor="exampleInputText1"
                  className="form-label fw-bold"
                >
                  First Name <span className="text-danger"> * </span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText1"
                  placeholder="First Name"
                  ref={firstName}
                />
                <div id="textHelp" className="form-text"></div>
              </div>
              <div className="mb-3 mb-sm-0">
                <label
                  htmlFor="exampleInputText2"
                  className="form-label fw-bold"
                >
                  Last Name <span className="text-danger"> * </span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText2"
                  placeholder="Last Name"
                  ref={lastName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="exampleInputEmail3"
                className="form-label fw-bold"
              >
                Email address <span className="text-danger"> * </span>{" "}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail3"
                placeholder="username@domain.com"
                ref={email}
              />
              <div id="emailHelp" className="form-text">
                We&apos;ll never share your email with anyone else.
              </div>
            </div>

            <div>
              <label
                htmlFor="exampleInputPassword4"
                className="form-label fw-bold"
              >
                Password <span className="text-danger"> * </span>{" "}
              </label>
              <div className="position-relative">
                <input
                  type={type}
                  className="form-control"
                  id="exampleInputPassword4"
                  placeholder="Password"
                  ref={password}
                />
                <span className="hidePassword" onClick={() => showPassword()}>
                  {" "}
                  {showIcon ? <BiShowAlt /> : <BiHide />}{" "}
                </span>
              </div>
              <div id="textHelp" className="form-text">
                Password Strength: No Password
              </div>
            </div>

            <div>
              <label
                htmlFor="exampleInputPassword5"
                className="form-label fw-bold"
              >
                {" "}
                Confirm Password <span className="text-danger"> * </span>{" "}
              </label>
              <div className="position-relative">
                <input
                  type={type}
                  className="form-control"
                  id="exampleInputPassword5"
                  placeholder="Confirm Password"
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
              <div id="textHelp" className="form-text">
                Password Strength: No Password
              </div>
            </div>

            <div className="mb-3 form-check my-md-4 mb-lg-4 mt-lg-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                ref={terms}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                {" "}
                I agree to Typeform’s <a href=""> Terms of Service </a>{" "}
              </label>
            </div>

            <div className="d-flex justify-content-center w-100 my-md-4  my-lg-3">
              <button type="submit" className="btn btn-primary">
                {" "}
                Create My Account{" "}
              </button>
            </div>
          </form>
          <div className="w-100  border-start box-content d-flex flex-column gap-3">
            <div className="text-center d-none d-lg-block p-3">
              <img
                src={userImage}
                alt="..."
                className=" rounded-circle"
                style={{maxHeight: "250px"}}
              />
            </div>
            <div className="box_sign gap-lg-3">
            <div className="d-flex justify-content-lg-center align-items-center mb-2 mb-md-3 mb-lg-3 gap-md-4">
              <h6 className=""> Already Have Account ?</h6>
              <Link to="/login" className=" text-danger">
                Sign in
              </Link>
            </div>
            <div>
              <span></span>
              <h6> OR </h6>
              <span></span>
            </div>
            <div className="d-flex justify-content-center gap-4">
              <a href="##" className="text-end">
                {" "}
                <img src={googleImage} alt="..." />{" "}
              </a>
              <a href="##" className="text-end">
                {" "}
                <img src={facebookImage} alt="..." />{" "}
              </a>
            </div>
          </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default SignUp;
