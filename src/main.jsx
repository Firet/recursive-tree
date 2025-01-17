import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Tutorial from "./pages/Tutorial.jsx";
import Home from "./pages/Home.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
