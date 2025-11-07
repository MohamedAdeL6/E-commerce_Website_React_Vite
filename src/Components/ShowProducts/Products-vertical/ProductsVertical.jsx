  import { Col } from "react-bootstrap";
  import Card from "react-bootstrap/Card";
  import { MdStar, MdStarHalf } from "react-icons/md";
  import { Link } from "react-router-dom";
  import Styled from "styled-components";
  import { addProduct } from "../../../Store/Slices/CardSlice";
  import { useDispatch, useSelector } from "react-redux";



 const CartBoxParag = Styled.p`
      @media (max-width: 574px) {
          max-width : 280px;
      }`;

    const CartBox = Styled.div`
      transition : all .5s;
      cursor: pointer;
      &:hover {
        .image-box {
          transform : scale(1.03)
        }
      }`;

    const CartBoxImage = Styled.div`
      transition : all .5s;
    `;







  const Products = () => {

    const products = useSelector((products) => products.ProductFilter);

    const dispatch = useDispatch();

    console.log(products);
    
   

    return (
      <div className="row m-0">
        {products.map((item) => {
          return (
            <Col key={item.id} className="border d-flex justify-content-center py-3 px-3">
              <CartBox className="d-flex flex-wrap gap-3">
                <Link
                  to={`/productDetails/${item.id}`}
                  className="d-flex flex-wrap gap-3 text-dark text-decoration-none"
                >
                  <CartBoxImage
                    className="image-box w-100 text-center shadow rounded-4"
                    style={{
                      height: "200px",
                      marginBottom: "10px",
                      padding: "10px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.mainImages}
                      style={{ maxHeight: "100%", width: "auto" }}
                    />
                  </CartBoxImage>

                  <div className="d-flex flex-wrap justify-content-center text-center gap-1 pb-2">
                    <h6 className="fw-bold " style={{ width: "max-width" }}>
                     {item.type.slice(0, 25)}
                    </h6>

                    <CartBoxParag
                      style={{
                        fontSize: "14px",
                        margin: "0",
                        width: "100%",
                        height: "46px",
                        overflow: "hidden",
                      }}
                    >
                      {item.title.slice(0, 77)}
                    </CartBoxParag>

                    <div className="w-100">
                      <MdStar className="text-warning" />
                      <MdStar className="text-warning" />
                      <MdStar className="text-warning" />
                      <MdStar className="text-warning" />
                      <MdStarHalf className="text-warning" />
                      ({item.rating.count})
                    </div>

                    <div className="fs-5 w-100">{item.price} $</div>

                    <div className="w-100 mt-1">
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => dispatch(addProduct(item))}
                      >
                        ADD Product
                      </button>
                    </div>
                  </div>
                </Link>
              </CartBox>
            </Col>
          );
        })}
      </div>
    );
  };

  export default Products;
