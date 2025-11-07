import { useEffect, useRef, useState } from "react";

import { MdGridView, MdOutlineClose } from "react-icons/md";
import { RiFilterOffLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

import "./ShowProducts.css";

import ProductsHorizontal from "./Products-horizontal/ProductsHorizontal";
import ProductsVertical from "./Products-vertical/ProductsVertical";

import Sidebar from "./Sidebar/Sidebar";

const ShowProducts = () => {
  const [showComponent, setShowComponent] = useState(true);

  const [showSidebar, setShowSidebar] = useState(false);

  const ver = useRef();
  const hor = useRef();
  const filterRef = useRef();
  const sidebarRef = useRef();

  function handleProductH() {
    setShowComponent(false);
    ver.current.classList.toggle("hidden");
    hor.current.classList.toggle("active");
  }

  function handleProductV() {
    setShowComponent(true);
    ver.current.classList.toggle("hidden");
    hor.current.classList.toggle("active");
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterRef.current && !filterRef.current.contains(e.target) &&
        sidebarRef.current && !sidebarRef.current.contains(e.target)
      ) {
        setShowSidebar(false);
      }
    };

    // Add event listener
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (

    <div className="page-wrapper d-flex flex-nowrap">

      <div className="container">

        <div className="page-wrapper-content">

          <div
            ref={sidebarRef}
            className={`sidebar ${showSidebar ? "active" : "hidden"}`}
          >
            <div className="sidebar-container">
              <div className="close_Sidebar">
                <div className="d-flex justify-content-between align-items-center p-3 bg-black text-white">
                  <h6 className="fw-bold"> Shopping Options </h6>
                  <a href="#">
                    <MdOutlineClose
                      className="fs-3 text-white"
                      onClick={() => setShowSidebar(!showSidebar)}
                    />
                  </a>
                </div>
              </div>

              <Sidebar />

            </div>
          </div>

          <div className="content w-100">

            <div className="filter border-bottom border-top" id="side" style={{ padding: "12.5px" }}>

              <div className="filter-content">
                <div
                  ref={filterRef}
                  className="filter-sort-position"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <p className="position-title">
                    {" "}
                    <RiFilterOffLine />{" "}
                  </p>

                  <div className="dropdown-content">Filter</div>
                </div>

                <div className="filter-sort-icons">
                  <span
                    className="icon-v  btn p-0 fs-4"
                    onClick={(e) => handleProductV(e)}
                    ref={ver}
                  >
                    {" "}
                    <MdGridView />{" "}
                  </span>

                  <span
                    className="icon-h btn p-0 fs-4"
                    onClick={(e) => handleProductH(e)}
                    ref={hor}
                  >
                    <TfiMenuAlt />{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="product-wrapper">
              {showComponent ? <ProductsVertical /> : <ProductsHorizontal />}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ShowProducts;
