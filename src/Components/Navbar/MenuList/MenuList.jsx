import { useState } from "react";
import { FiChevronRight, FiUser, FiUserCheck } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import "./MenuList.css";
import { filterBrand } from "../../../Store/Slices/ProductFilter";
import allProducts from "../../ProductsData/ProductsData.json";

import { useDispatch } from "react-redux";

import categoriesImages from "../CategoriesImages/CategoriesImages";
import { Link } from "react-router-dom";

const MenuList = () => {
  const dispatch = useDispatch();

  const allCategories = allProducts
    .map((product) => product.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const [openCategories, setOpenCategories] = useState(false);

  return (
    
    <div className="w-100 menu">

      <div className="w-100 menu-container">

        <div className="w-100 h-100 menu-content ">

          <div className="w-100 menuTop align-items-center px-3">
            <div className="w-100 d-flex justify-content-between align-items-center py-2 fs-6">
              <Link
                to="tel:19966"
                className="customer-call d-flex justify-content-between align-items-center gap-2 "
              >
                <span className="icon-user-outline p-0">
                  {" "}
                  <IoCallOutline />{" "}
                </span>

                <p className="m-0"> 19966 </p>
              </Link>

              <div className="d-flex justify-content-center align-items-center p-0 ">
                <span className="p-0 m-0"> delivery : &nbsp; </span>
                <span className="p-0 m-0"> Cairo </span>
              </div>
            </div>
          </div>

          <div className="w-100 menuMiddle px-3">
            <div className="w-100 d-flex justify-content-between align-items-center py-2">
              <Link
                to="/login"
                className="w-100 d-flex justify-content-start align-items-center gap-2 text-decoration-none fs-6 text-dark p-0"
              >
                <span className="fs-5" style={{ lineHeight: ".5" }}>
                  {" "}
                  <FiUserCheck />{" "}
                </span>
                <span> Sign in </span>
              </Link>
              <Link
                to="/sign"
                className="w-100 d-flex justify-content-end align-items-center gap-2 text-decoration-none fs-6 text-dark p-0"
              >
                <span className="fs-5" style={{ lineHeight: ".5" }}>
                  {" "}
                  <FiUser />{" "}
                </span>
                <span> Sign up </span>
              </Link>
            </div>
          </div>

          <div className="w-100 px-3 menu_navbar_categories d-flex flex-grow-1	">
            <div
              className="w-100 d-flex align-items-center"
              onClick={() => setOpenCategories(!openCategories)}
            >
              <div
                className={`w-100 h-100 d-flex flex-column justify-content-between py-2 ${
                  openCategories ? "active" : "hidden"
                }`}
              >
                {allCategories.map((item) => {
                  return (
                    <div
                      className="menu-categories-names-item "
                      key={Math.random()}
                    >
                      <div className="w-100 menu-categories-names-item-name">
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

                        <Link
                          to="/showProduct"
                          className="d-flex text-decoration-none text-dark "
                          style={{minWidth: "120px"}}
                          onClick={() => dispatch(filterBrand(item))}
                        >
                          {item}
                        </Link>

                        
                      <div className="w-100 ">
                        <FiChevronRight />
                      </div>

                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
