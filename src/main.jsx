import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Tutorial from "./pages/Tutorial.jsx";
import HomePage from "./pages/HomePage.jsx";
import "./styles.css";

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
