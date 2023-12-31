import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import tabs from "./features/tabs";
import preview from "./features/preview.js";
import { Provider } from "react-redux";
import "./index.css";

const store = configureStore({
  reducer: {
    tabs,
    preview,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
