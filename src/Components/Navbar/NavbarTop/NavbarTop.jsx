import { Link } from "react-router-dom";
import "./NavbarTop.css";
import { IoCallOutline } from "react-icons/io5";

const NavbarTop = () => {
  // let NavbarTop = useRef()
  // const myScrollFunc = () => {
  // 	window.scrollY >= 500 ? NavbarTop.current.className = "bg-dark d-none" : NavbarTop.current.className = "bg-dark d-block"
  // }
  // window.addEventListener("scroll", myScrollFunc)

  return (
    <div className="panel wrapper " ref={NavbarTop}>
      <div className="container">
        <div className="panel header">
          <div
            className="switcher language switcher-language"
            id="switcher-language"
          >
            <div className="actions dropdown options switcher-options">
              <ul className="switcher-dropdown">
                <li className="view-ar switcher-option d-none justify-content-center align-items-center gap-2">
                  <Link to="##">عربى</Link>
                  <img src="/src/Components/Navbar/NavbarTop/NavbarTopImages/ar.png" />
                </li>

                <li className="view-en switcher-option d-flex justify-content-center align-items-center gap-2">
                  <Link to="##">English</Link>
                  <img src="/src/Components/Navbar/NavbarTop/NavbarTopImages/en.png" />
                </li>
              </ul>
            </div>

            <p className="delievey-area-header d-flex justify-content-center align-items-center">
              My delivery area:<span>Cairo</span>
            </p>
          </div>

          <ul className="header-links">
            <li>
              <Link to="##" id="idD85zHS2y" className="csmarketplace-link-gtm d-flex align-items-center justify--content-center">
                {" "}
                Sell on CoverMe Company{" "}
              </Link>
            </li>

            <li className="call d-flex justify--content-center align-items-center gap-2">
              <span className="icon-phone-small">
                {" "}
                <IoCallOutline />
              </span>
              <Link to="##" className="m-0 ">Call 19555</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
