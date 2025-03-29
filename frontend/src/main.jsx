import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import TwoNameInput from "./TwoNameInput";
import ThreeNameInput from "./ThreeNameInput";
import FourNameInput from "./FourNameInput";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/2player" element={<TwoNameInput />} />
        <Route path="/3player" element={<ThreeNameInput />} />
        <Route path="/4player" element={<FourNameInput />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
