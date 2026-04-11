// import { useRef, useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import "./Price.css";
// import { useDispatch } from "react-redux";
// import { filterPrice } from "../../../../../Store/Slices/ProductFilter";
// import ReactSlider from "react-slider";

// const Price = () => {
//   const dispatch = useDispatch();

//   const refPriceContent = useRef();
//   const refPriceHeaderMinus = useRef();
//   const refPriceHeaderPlus = useRef();

//   const handlePrice = () => {
//     refPriceContent.current.classList.toggle("active");
//     refPriceHeaderMinus.current.classList.toggle("hidden");
//     refPriceHeaderPlus.current.classList.toggle("active");
//   };

//   const [values, setValues] = useState([0, 100000]);
//   const handleChange = (newValues) => {
//     setValues(newValues);
//     dispatch(filterPrice(newValues));
//   };

//   return (
//     <div className="price">
//         <div className="price-container px-3">
//           <div className="price-header" onClick={() => handlePrice()}>
//             <h3> Price </h3>
//             <span className="minus" ref={refPriceHeaderMinus}>
//               <AiOutlineMinus />
//             </span>
//             <span className="plus" ref={refPriceHeaderPlus}>
//               <AiOutlinePlus />
//             </span>
//           </div>

//           <div className="price-content" ref={refPriceContent}>
//             <div className="rangeInput">
//               <div className="inputMin">
//                 <label htmlFor="minPrice">Min </label>
//                 <input
//                   type="number"
//                   id="minPrice"
//                   value={values[0]}
//                   onChange={(e) => handleChange([+e.target.value, values[1]])}
//                 />
//               </div>
//               <div className="slash"> ــ </div>
//               <div className="inputMax">
//                 <label htmlFor="maxPrice">Max</label>
//                 <input
//                   type="number"
//                   id="maxPrice"
//                   value={values[1]}
//                   onChange={(e) => handleChange([values[0], +e.target.value])}
//                 />
//               </div>
//             </div>

//             <ReactSlider
//               className="horizontal-slider"
//               thumbClassName="example-thumb"
//               trackClassName="example-track"
//               defaultValue={values}
//               ariaLabel={["Lower thumb", "Upper thumb"]}
//               onChange={handleChange}
//               min={0}
//               max={10000}
//             />
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Price;



import { useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Price.css";
import { useDispatch } from "react-redux";
import { filterPrice } from "../../../../../Store/Slices/ProductFilter";
import ReactSlider from "react-slider";

const Price = () => {
  const dispatch = useDispatch();

  const refPriceContent = useRef();
  const refPriceHeaderMinus = useRef();
  const refPriceHeaderPlus = useRef();

  const handlePrice = () => {
    refPriceContent.current.classList.toggle("active");
    refPriceHeaderMinus.current.classList.toggle("hidden");
    refPriceHeaderPlus.current.classList.toggle("active");
  };

  const [values, setValues] = useState([0, 100000]);
  const handleChange = (newValues) => {
    setValues(newValues);
    dispatch(filterPrice(newValues));
  };

  return (
    <div className="price">
      <div className="price-container px-3">
        <div className="price-header" onClick={() => handlePrice()}>
          <h3> Price </h3>
          <span className="minus" ref={refPriceHeaderMinus}>
            <AiOutlineMinus />
          </span>
          <span className="plus" ref={refPriceHeaderPlus}>
            <AiOutlinePlus />
          </span>
        </div>

        <div className="price-content" ref={refPriceContent}>
          <div className="rangeInput">
            <div className="inputMin">
              <label htmlFor="minPrice">Min </label>
              <input
                type="number"
                id="minPrice"
                value={values[0]}
                onChange={(e) =>
                  handleChange([Number(e.target.value), values[1]])
                }
              />
            </div>
            <div className="slash"> ــ </div>
            <div className="inputMax">
              <label htmlFor="maxPrice">Max</label>
              <input
                type="number"
                id="maxPrice"
                value={values[1]}
                onChange={(e) =>
                  handleChange([values[0], Number(e.target.value)])
                }
              />
            </div>
          </div>

          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            value={values}           // <-- controlled now
            ariaLabel={["Lower thumb", "Upper thumb"]}
            onChange={handleChange}
            min={0}
            max={100000}            // <-- match initial state
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
