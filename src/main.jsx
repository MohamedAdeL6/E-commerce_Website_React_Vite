import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Store/CreateStore/CreateStore";

/** GitHub Pages serves the app under /repo-name/; Vite relative base uses "./" so we infer basename from the URL. */
function getRouterBasename() {
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={getRouterBasename()}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
