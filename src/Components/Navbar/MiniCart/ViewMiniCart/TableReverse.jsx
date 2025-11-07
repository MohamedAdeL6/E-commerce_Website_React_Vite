import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../../Store/Slices/CardSlice';
import './ViewMiniCart.css'
import { Link } from 'react-router-dom';



const TableReverse = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.card);

  return (
    <table className="table"  size="sm">
      <tbody>
        {
          products.map((product) => {

            return (
              <>
                <tr key={Math.random() * 22}>
                  <th> ID</th>
                  <td> {product.id} </td>
                </tr>
                <tr>
                  <th> Title </th>
                  <td > {product.title} </td>
                </tr>
                <tr>
                  <th> Image </th>
                  <td> <img src={product.mainImages} alt="..." style={{ width: "35px" }} /> </td>
                </tr>
                <tr>
                  <th> Mount </th>
                  <td> {product.quantity} </td>
                </tr>
                <tr>
                  <th> Price </th>
                  <td> {product.price} </td>
                </tr>
                <tr>
                  <th > Action </th>
                  <td> <Button variant="danger" onClick={() => dispatch(deleteProduct(product))} > Delete </Button> </td>
                </tr>
                <tr style={{ borderBottom: "2px solid #333" }}>
                  <th > Payment </th>
                  <td>  <Link to="/payment"> <Button variant="info"  className='text-light px-3 py-2'> Pay</Button> </Link>  </td>
                </tr>
              </>
            );
          })
        }
      </tbody>
    </table >


  )
}

export default TableReverse
