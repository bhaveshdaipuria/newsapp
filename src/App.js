import React from "react";
import "./App.css";
import AllRoutes from "./Router/AppRoute";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
