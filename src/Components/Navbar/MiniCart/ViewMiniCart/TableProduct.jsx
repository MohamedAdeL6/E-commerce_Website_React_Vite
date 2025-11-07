
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../../Store/Slices/CardSlice";
import "./ViewMiniCart.css";
import { Link } from "react-router-dom";
const TableProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.card);

  return (
    <table className="table"  size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th> Title </th>
          <th> Image </th>
          <th> Mount </th>
          <th> Price </th>
          <th> Action </th>
          <th> Payment </th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => {
          return (
            <tr key={Math.random() * 22}>
              <td> {product.id} </td>
              <td> {product.title} </td>
              <td style={{ width: "10%", textAlign: "center" }}>
                {" "}
                <img
                  src={product.mainImages}
                  alt="..."
                  style={{ width: "35px" }}
                />{" "}
              </td>
              <td> {product.quantity} </td>
              <td> {product.price} </td>
              <td>
                {" "}
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteProduct(product))}
                >
                  {" "}
                  Delete{" "}
                </Button>{" "}
              </td>
              <td>
                {" "}
                <Link to="/payment">
                  {" "}
                  <Button variant="info" className="text-light px-3 py-2">
                    {" "}
                    Pay{" "}
                  </Button>{" "}
                </Link>{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableProduct;
