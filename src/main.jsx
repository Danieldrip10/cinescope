import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NameContext } from "./context/UserContext.jsx";
import { MovieContext } from "./context/MovieContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NameContext>
      <MovieContext>
        <App />
      </MovieContext>
    </NameContext>
  </BrowserRouter>,
);
