import React from "react";
import HomePage from "./pages/homePage/homePage.component";
import WebRoutes from "./pages/RouteSeperator/webRoutes.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksDetail from "./pages/BooksDetail/BooksDetail.component";
import Login from "./pages/Login";
import { MainHome } from "./pages/homePage/Main/MainHome";
import { Description } from "./pages/Description/Description";
import  ReadBook from "./pages/ReadBook";

export default function RouteSeperater() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WebRoutes />}>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/BookDetail" element={<BooksDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/MainHome" element={<MainHome />} />
            <Route path="/Description" element={<Description />} />
            <Route path="/readbook" element={<ReadBook />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}