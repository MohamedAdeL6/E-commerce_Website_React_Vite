import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Store/CreateStore/CreateStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
        basename={import.meta.env.BASE_URL.replace(/\/$/, "") || undefined}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
