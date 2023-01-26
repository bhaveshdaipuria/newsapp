import React from "react";
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import AppRoute from "./Router/AppRoute";

function App(){

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='*' element={<AppRoute/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
