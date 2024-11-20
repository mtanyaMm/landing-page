import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/prices.css";
import "./styles/header.css";
import "./styles/heroScreen.css";
import "./styles/whyUs.css";
import "./styles/about.css";
import "./styles/feedback.css";
import "./styles/footer.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
