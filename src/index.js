import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { getProductos } from "./utils";

getProductos();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
