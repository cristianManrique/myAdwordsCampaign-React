// React
import React from "react";
import { createRoot } from "react-dom/client";
// Components
import App from "./components/App";
import Connexion from "./components/Connexion";
import NotFound from "./components/NotFound";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS
import "./assets/css/index.css";

const Root = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Connexion />} />
        <Route path="/box/:pseudo" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);
