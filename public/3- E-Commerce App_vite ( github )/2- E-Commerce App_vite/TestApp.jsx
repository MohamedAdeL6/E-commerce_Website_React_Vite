import { useEffect, useRef } from "react";
import { FiX, FiSearch } from "react-icons/fi";

const TestApp = () => {


  let inputSearch = useRef();

  console.log(inputSearch);                                              // return undefined

  console.log(document.querySelector(".header-navbar-form input"));     // return undefined


  
  //  <-----  don't use   (  useEffect  )   ------>
  const resetInput = () => {
    inputSearch.current.value = "";
    inputSearch.current.focus();
  };


  //   <-----   When  use   (   useEffect  )   ------>
  useEffect(() => {
    
    console.log(document.querySelector(".header-navbar-form input"));     // return   input <input type="text" placeholder="search" class="form-input"> 

    console.log(inputSearch);                                            // return   input <input type="text" placeholder="search" class="form-input"> 

  }, []);


  return (
    <div>
      <div className="header-navbar-form">
        <input
          type="text"
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
    </div>
  );
};

export default TestApp;
