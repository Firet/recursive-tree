import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Tutorial from "./components/Tutorial.jsx";
import HomePage from "./HomePage.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
