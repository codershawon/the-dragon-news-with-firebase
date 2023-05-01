import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./Routes/Routes";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
