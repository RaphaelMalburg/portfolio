import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
