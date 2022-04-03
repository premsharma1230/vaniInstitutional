import React from "react";
import HomePage from "./pages/homePage/homePage.component";
import WebRoutes from "./pages/RouteSeperator/webRoutes.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksDetail from "./pages/BooksDetail/BooksDetail.component";
import EbookList from "./pages/EbookList"
import InstitutionalLogin from "./pages/Login";

export default function RouteSeperater() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<WebRoutes />}>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/BookDetail" element={<BooksDetail />} />
            <Route path="/Login" element={<InstitutionalLogin />} />
            <Route path="/EbookList" element={<EbookList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
