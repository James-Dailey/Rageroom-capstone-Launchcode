import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebRoutes from "./WebRoutes";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<WebRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
