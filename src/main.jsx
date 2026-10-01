import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "@fontsource-variable/manrope";
import "./i18n/index.js";
import "./index.css";
import { applyTheme, getInitialTheme } from "./theme/theme.js";
applyTheme(getInitialTheme());

createRoot(
  document.getElementById("root"),
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
