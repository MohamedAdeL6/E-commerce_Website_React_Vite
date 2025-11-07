import { MdStar, MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";

import Styled from "styled-components";
import { useSelector } from "react-redux";

const ProductsWidth = () => {
  const products = useSelector((products) => products.ProductFilter);

  const CartBox = Styled.div`
    width : 100%;
    display : flex;
    padding : 15px ;
    flex-wrap : wrap;
    transition : all .5s;
    cursor: pointer;
    &:hover {
      .image-box {
        transform : scale(1.05);
      }
    };
    @media (max-width: 767px) {
        flex-wrap : wrap;
        width : 400px;
         gap : 20px;
    }`;
  const Heading = Styled.div`
    width : 100%;  
    @media (min-width: 767px) {
         width : 40%;
         padding : 0 15px; 
    }`;
  const CardBody = Styled.div`
    width : 25%;
    @media (min-width: 767px) {
         text-align : justify;
         width : 30%;
    }`;


  return (
    <div className="d-flex flex-wrap gap-4">
      {products.map((product) => {
        return (
          <div
            className="w-100 d-flex flex-wrap justify-content-center border border-bottom"
            key={Math.random()}
          >
            <CartBox className="w-100 p-0">
              <Link
                to={`/productDetails/${product.id}`}
                className="w-100 d-flex flex-wrap flex-md-nowrap justify-content-center gap-3 text-dark text-decoration-none p-3"
              >
                <div className="image-box shadow rounded-4 d-flex justify-content-center align-items-center px-2">
                  <a href="##" className="w-100 d-flex justify-content-center align-items-center text-center">
                    {" "}
                    <img
                      src={product.mainImages}
                      alt="..."
                      style={{ width: "130px", height: "140px" }}
                    />{" "}
                  </a>
                </div>

                <Heading className="card-title text-center d-flex align-items-center justify-content-center">
                  <h5> {product.type} </h5>
                </Heading>

                <CardBody className="card-body d-flex">
                  <div className="d-flex flex-wrap gap-2">
                    <div className="card-description  fs-6 w-100 text-center"  style={{height: "54px", overflow: "hidden"}}>
                      {product.title.slice(0, 100)}
                    </div>
                    <div className="card-rating w-100 text-center">
                      {<MdStar className="text-warning" />}
                      {<MdStar className="text-warning" />}
                      {<MdStar className="text-warning" />}
                      {<MdStar className="text-warning" />}
                      {<MdStarHalf className="text-warning" />}(
                      {product.rating.count})
                    </div>
                    <div className="btn-box w-100 mt-2 text-center">
                      <Link
                        to={`/productDetails/${product.id}`}
                        className="btn btn-primary"
                      >
                        {" "}
                        ADD Product{" "}
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Link>
            </CartBox>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsWidth;

