import image from "./gif_en_web.gif";
import Styled from "styled-components";
const CartImage = Styled.div`
    height: 50px;
    @media (min-width: 574px) {
      height: 60px;
    }`;

const Section2 = () => {
  return (
    <div className="w-100">
      <div className="container">
        <CartImage className="image-box">
          <img src={image} alt="..." className="w-100 h-100" />
        </CartImage>
      </div>
    </div>
  );
};

export default Section2;
