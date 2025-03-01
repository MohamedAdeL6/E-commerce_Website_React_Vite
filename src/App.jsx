import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ViewMiniCart from "./Components/Navbar/MiniCart/ViewMiniCart/ViewMiniCart";
import Login from "./Components/Navbar/Login/Login";
import SignUp from "./Components/Navbar/Login/SignUp";
import Payment from "./Components/Payment/Payment";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ShowProducts from "./Components/ShowProducts/ShowProducts";
import ProductDetails from "./Components/ShowProducts/SingleProductDetails/SingleProductDetails";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<ViewMiniCart />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/showProduct" element={<ShowProducts />} />
        <Route path="/productDetails/:productID" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
