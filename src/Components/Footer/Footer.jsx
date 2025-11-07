import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import imageFooter from "./Footer-Images/paymentsn1.jpg";

const Footer = () => {
  
  return (

    <div className="page-footer bg-dark">
      
      <div className="footer">
        
        <div className="footer-top">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="custom-block">
                  <div className="col-md-12 text-center">
                    <div className="block">
                      <div className="block-title">
                        <strong className="text-light">
                          {" "}
                          BE THE FIRST TO KNOW{" "}
                        </strong>
                      </div>

                      <div className="block-content">
                        <p className="text-light">
                          {" "}
                          Subscribe and Get all the latest information on Sales
                          and Offers now{" "}
                        </p>
                      </div>

                      <div className="block-content w-100 my-4">
                        <div className="block-content-newsletter">
                          <form className="form subscribe">
                            <div className="control">
                              <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                              />
                            </div>
                            <div className="actions">
                              <button
                                className="action subscribe primary"
                                title="Subscribe"
                                type="submit"
                              >
                                <span id="sub">Send</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="footer-middle">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-3">
                    <div className="block">
                      <div className="block-title">
                        <strong>
                          {" "}
                          <span> Contact </span>{" "}
                        </strong>
                      </div>
                      <div className="block-content">
                        <ul className="contact-info whitening">
                          <li>
                            {" "}
                            <a href="##" title="About us">
                              {" "}
                              About us{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="##" title="Contact us">
                              {" "}
                              Contact us{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="##" title="PHONE us">
                              {" "}
                              PHONE: 16420{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="##" title="EMAIL us">
                              {" "}
                              EMAIL: INFO@2B.COM.EG{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="block">
                      <div className="block-title">
                        <strong> MY ACCOUNT </strong>
                      </div>
                      <div className="block-content">
                        <ul>
                          <li>
                            {" "}
                            <a href="##" title="Profile">
                              {" "}
                              Profile
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="##" title="Order history">
                              {" "}
                              Order history{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="##" title="Track ">
                              {" "}
                              Track your order{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="block">
                      <div className="block-title">
                        <strong> MOST RESEARCHED </strong>
                      </div>
                      <div className="block-content">
                        <ul>
                          <li>
                            {" "}
                            <a href="##" title="Laptop ">
                              {" "}
                              Laptop{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="##" title="Order history">
                              {" "}
                              Mobile Devices{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="##" title="TV">
                              {" "}
                              TV Accessories{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="block">
                      <div className="block-title">
                        <span className="thirteen text-secondary">
                          Stores Working Days
                        </span>
                      </div>
                      <div className="block-content">
                        <ul className="features">
                          <li className="text-secondary">
                            {" "}
                            Daily / 10:00 AM to 10:00 PM{" "}
                          </li>
                          <li>
                            {" "}
                            <strong className="text-light d-line-block mb-2">
                              {" "}
                              Download App Now{" "}
                            </strong>{" "}
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <a
                                  className="google-play-link"
                                  href="##"
                                  target="_blank"
                                >
                                  <img
                                    src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/homepage/google_new.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="col-md-6 col-6">
                                <a href="##" target="_blank">
                                  <img
                                    src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/homepage/apple_new.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-md-6 col-6">
                                <a href="##" target="_blank">
                                  <img
                                    src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/homepage/huawei_new.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="col-md-6 col-6">
                                <a href="##"> Download Apk </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="block-bottom">
                      <div className="row">
                        <div className="col-md-3 social-icons social-icons2">
                          <a
                            className="socials facebook"
                            href="##"
                            title="Facebook"
                            target="_blank"
                          >
                            {" "}
                            <FaFacebookF />{" "}
                          </a>
                          <a
                            className="socials twitter"
                            href="##"
                            title="Twitter"
                            target="_blank"
                          >
                            {" "}
                            <FaTwitter />{" "}
                          </a>
                          <a
                            className="socials linkedin"
                            href="##"
                            title="Linkedin"
                            target="_blank"
                          >
                            {" "}
                            <FaLinkedin />
                          </a>
                          <a
                            className="socials instagram"
                            href="##"
                            title="Instagram"
                            target="_blank"
                          >
                            {" "}
                            <FaInstagram />
                          </a>
                        </div>

                        <div className="col-md-3 mb-3">
                          <br />
                          <span className="fs-5 text-light">Main Features</span>
                        </div>

                        <div className="col-md-3">
                          <ul>
                            <li className="text-light">Super Fast Shipping</li>
                            <br />
                            <li>
                              <a href="##">
                                Return and exchange service ”T &amp; C applied”.
                              </a>
                            </li>
                            <br />
                          </ul>
                        </div>

                        <div className="col-md-3 col-3 text-light">
                          <ul>
                            <li>Maintenance Center to help you</li>
                            <br />
                            <li>
                              More than 50 Stores at your service anywhere
                            </li>
                            <br />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="block">
              <Link to="/payment" className="custom-block">
                <img style={{ maxHeight: "28px" }} src={imageFooter} alt="" />
              </Link>
              <address>
                ©Copyright 2023 by Mohamed Adel All Rights Reserved.
              </address>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Footer;
