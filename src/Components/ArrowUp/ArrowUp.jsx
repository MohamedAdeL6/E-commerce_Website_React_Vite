import { useEffect, useRef, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import "./ArrowUp.css";

const ArrowUp = () => {
  const [showArrowUpIcon, setShowArrowUpIcon] = useState(false);
  const arrowUp = useRef();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 300) {
        setShowArrowUpIcon(true);
      } else {
        setShowArrowUpIcon(false);
      }
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={arrowUp}
      className={`arrowIcon ${showArrowUpIcon ? "active" : "hidden"}`}
      onClick={() => goToTop()}
    >
      <RxDoubleArrowUp />
    </div>
  );
};

export default ArrowUp;
