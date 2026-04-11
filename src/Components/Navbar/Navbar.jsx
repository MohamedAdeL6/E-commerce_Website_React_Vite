import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiMenu,
  FiUser,
  FiChevronDown,
  FiChevronRight,
  FiX,
  FiSearch,
} from "react-icons/fi";

import "./AppNavbar.css";
import imageLogo from "./NavbarImage/supermarket-logo3.jpg";
import MiniCart from "./MiniCart/MiniCart";
import NavbarTop from "./NavbarTop/NavbarTop";
import allProducts from "../ProductsData/ProductsData.json";

import { useDispatch, useSelector } from "react-redux";
import { filterBrand } from "../../Store/Slices/ProductFilter";

import categoriesImages from "./CategoriesImages/CategoriesImages";
import MenuList from "./MenuList/MenuList";

const Navbar = () => {
  const products = useSelector((state) => state.card);

  const dispatch = useDispatch();

  const allCategories = allProducts
    .map((product) => product.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const [openCart, setOpenCart] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openMenuList, setOpenMenuList] = useState(false);

  let CartRef = useRef();
  let categories = useRef();
  let menuList = useRef();
  let menuListRef = useRef();
  let headerContainer = useRef();
  let inputSearch = useRef();

  const resetInput = () => {
    inputSearch.current.value = "";
    inputSearch.current.focus();
  };

useEffect(() => {
  const handleClick = (e) => {
    if (menuListRef.current) {
      // Check if the ref is not null before accessing classList
      menuListRef.current.classList.contains("active")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }

    if (CartRef.current && !CartRef.current.contains(e.target)) {
      setOpenCart(false);
    }

    if (categories.current && !categories.current.contains(e.target)) {
      setOpenCategories(false);
    }

    if (menuList.current && !menuList.current.contains(e.target)) {
      setOpenMenuList(false);
    }
  };

  window.addEventListener("click", handleClick);

  return () => {
    window.removeEventListener("click", handleClick);
  };
}, []);



  return (
    <div className="Header">
      <NavbarTop />

      <div className="header-page position-relative">
        <div className="container" ref={headerContainer}>
          <div className="header-navbar position-relative flex-nowrap">
            <div className="header-navbar-logo">
              <div className="header-navbar-menu">
                <div
                  className="header-navbar-menu-icon"
                  onClick={() => setOpenMenuList(!openMenuList)}
                >
                  <div className="header-navbar-menu-icon1" ref={menuList}>
                    <FiMenu />
                  </div>
                </div>
              </div>

              <div className="header-navbar-logo-image">
                <Link to="/home" className="logo-link">
                  <img
                    src={imageLogo}
                    alt="..."
                    className="img"
                    width="170px"
                    height="54px"
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="header-navbar-content ">
              <div className="header-navbar-categories-list">
                <div
                  className="header-navbar-categories-item"
                  onClick={() => setOpenCategories(!openCategories)}
                >
                  <div
                    className="categories-item-content d-flex align-items-center gap-2"
                    ref={categories}
                  >
                    <p className="categories-item-title"> Categories </p>

                    <span className="categories-item-icon">
                      <FiChevronDown />
                    </span>
                  </div>

                  <div
                    className={`categories-names ${
                      openCategories ? "active" : "hidden"
                    }`}
                  >
                    <div className="categories-names-container">
                      {allCategories.map((item) => {
                        return (
                          <Link
                            to="/showProduct"
                            onClick={() => dispatch(filterBrand(item))}
                            className="categories-names-item text-decoration-none"
                            key={Math.random()}
                          >
                            <div className="d-flex gap-4 align-items-center">
                              {categoriesImages.map((el) => {
                                if (el.includes(item)) {
                                  return (
                                    <div key={Math.random()}>
                                      <img
                                        src={el}
                                        alt="..."
                                        width="35px"
                                        height="35px"
                                      />
                                    </div>
                                  );
                                }
                              })}
                              <div
                                className="text-decoration-none text-dark" >
                                {item}
                              </div>
                            </div>

                            <div className="text-dark">
                              <FiChevronRight />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-navbar-categories-item">
                <p className="categories-item-title text-danger">
                  {" "}
                  Everyday Deals{" "}
                </p>
              </div>
            </div>

            <div className="header-navbar-form">
              <input
                type={"text"}
                placeholder="search"
                className="form-input"
                ref={inputSearch}
              />
              <span onClick={resetInput}>
                <FiX />
              </span>
              <div>
                <FiSearch />
              </div>
            </div>

            <div className="header-navbar-account d-none d-sm-flex">
              <Link
                to="/login"
                className="header-navbar-account-icon text-dark d-flex align-items-center justify-content-center gap-2"
              >
                <FiUser />
                <span className="d-none d-lg-flex fs-5 "> Sign in </span>
              </Link>
            </div>

            <div className="header-navbar-cart-account">
              <div className="header-navbar-cart">
                <div
                  className="header-navbar-cart-icon"
                  onClick={() => setOpenCart(!openCart)}
                  ref={CartRef}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.0"
                      width="30px"
                      height="30px"
                      viewBox="0 0 100.000000 100.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                        fill="#000"
                        stroke="none"
                      >
                        <path d="M432 969 c-72 -22 -132 -111 -132 -196 l0 -33 -80 0 c-48 0 -80 -4 -80 -10 0 -6 -18 -167 -40 -357 -22 -191 -40 -353 -40 -360 0 -10 91 -13 440 -13 349 0 440 3 440 13 0 7 -18 169 -40 360 -22 190 -40 351 -40 357 0 6 -32 10 -79 10 l-78 0 -6 55 c-11 104 -79 173 -178 180 -30 3 -69 0 -87 -6z m156 -56 c44 -33 65 -69 70 -122 l5 -51 -162 0 -161 0 0 34 c0 67 36 125 95 152 40 19 119 12 153 -13z m-288 -233 c0 -11 -6 -29 -12 -40 -17 -26 0 -55 32 -55 32 0 49 29 32 55 -6 11 -12 29 -12 40 0 19 6 20 160 20 154 0 160 -1 160 -20 0 -11 -6 -29 -12 -40 -17 -26 0 -55 32 -55 32 0 49 29 32 55 -6 11 -12 29 -12 40 0 18 7 20 60 20 71 0 59 40 100 -335 17 -148 32 -282 35 -297 l5 -28 -400 0 -399 0 4 28 c3 15 18 149 35 297 41 375 29 335 100 335 53 0 60 -2 60 -20z" />
                      </g>
                    </svg>
                  </span>

                  <span className="cart-counter-number bg-danger text-light">
                    {products.length}
                  </span>
                </div>

                <div className={` mini-Cart ${openCart ? "active" : "hidden"}`}>
                  <MiniCart />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`menuList  ${openMenuList ? "active" : "hidden"}`}
          ref={menuListRef}
        >
          <div className="container">
            <div className={`menuList-container `}>
              <MenuList />
            </div>
          </div>
          <div className="overlay position-absolute top-0 start-0 w-100 h-100">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
5;
