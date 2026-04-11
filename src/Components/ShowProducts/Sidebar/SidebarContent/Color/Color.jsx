import { useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { filterColor } from "../../../../../Store/Slices/ProductFilter";
import "./Color.css";

const Color = () => {
  const dispatch = useDispatch();

  const refColorContent = useRef();
  const refColorHeaderMinus = useRef();
  const refColorHeaderPlus = useRef();
  const colorListRef = useRef();
  // const refColorHeaderPlus = useRef();

  const handleColor = () => {
    refColorContent.current.classList.toggle("active");
    refColorHeaderMinus.current.classList.toggle("hidden");
    refColorHeaderPlus.current.classList.toggle("active");
  };

  // window.onscroll = () => {
  //   if (window.scrollY > 30) {
  //     colorListRef.current.style.gap = "25px";
  //   } else {
  //     colorListRef.current.style.gap = "18px";
  //   }
  // 

  const colors = [
    { Darkblue: "#0a0a3a" },
    { "Off White": "#f6f0d9" },
    { "Light Brown": "#af621c" },
    { Navy: "navy" },
    { Silver: "silver" },
    { Gold: "#e1d866" },
    { Purple: "#b900f7" },
    { White: "white" },
    { Red: "red" },
    { Blue: "blue" },
    { "Vibrant Blue": "#0337f0" },
    { "Light Blue": "#a8d1df" },
    { Orange: "orange" },
    { Gray: "gray" },
  ];

  return (
    <div className="Color">
        <div className="Color-container px-3">
          <div className="Color-header" onClick={() => handleColor()}>
            <span className="title"> Color </span>
            <span className="minus" ref={refColorHeaderMinus}>
              {" "}
              <AiOutlineMinus />{" "}
            </span>
            <span className="plus" ref={refColorHeaderPlus}>
              {" "}
              <AiOutlinePlus />{" "}
            </span>
          </div>
          <div className="Color-Content hidden" ref={refColorContent}>
            <div className="Color-content-list" ref={colorListRef}>
              {colors.map((items) =>
                Object.keys(items).map((item) => (
                  <div
                    className="Color-content-item white"
                    key={Math.random()}
                    onClick={() => dispatch(filterColor(item))}
                  >
                    <div
                      className="item-color"
                      style={{ backgroundColor: `${items[item]}` }}
                    >
                      {" "}
                    </div>
                    <p className="item-title"> {item} </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Color;
