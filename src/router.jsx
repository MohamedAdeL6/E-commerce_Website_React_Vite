import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Components/Home/Home";
import ViewMiniCart from "./Components/Navbar/MiniCart/ViewMiniCart/ViewMiniCart";
import Login from "./Components/Navbar/Login/Login";
import SignUp from "./Components/Navbar/Login/SignUp";
import Payment from "./Components/Payment/Payment";
import ShowProducts from "./Components/ShowProducts/ShowProducts";
import ProductDetails from "./Components/ShowProducts/SingleProductDetails/SingleProductDetails";

/** GitHub Pages: app lives under /repo-name/; with Vite `base: "./"` we infer basename from the URL. */
export function getRouterBasename() {
  const base = import.meta.env.BASE_URL;
  if (typeof base === "string" && base.startsWith("/") && base.length > 1) {
    const trimmed = base.replace(/\/$/, "");
    return trimmed || undefined;
  }
  if (import.meta.env.PROD && typeof window !== "undefined") {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    if (first && !first.includes(".")) {
      return `/${first}`;
    }
  }
  return undefined;
}

export function createAppRouter() {
  const basename = getRouterBasename();

  return createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "cart", element: <ViewMiniCart /> },
          { path: "sign", element: <SignUp /> },
          { path: "login", element: <Login /> },
          { path: "forgetPassword", element: <Login /> },
          { path: "payment", element: <Payment /> },
          { path: "showProduct", element: <ShowProducts /> },
          { path: "products", element: <ShowProducts /> },
          { path: "productDetails/:productID", element: <ProductDetails /> },
          { path: "*", element: <Home /> },
        ],
      },
    ],
    { basename }
  );
}
