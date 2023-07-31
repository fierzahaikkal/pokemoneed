import React from "react";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import { Detail } from "./pages/Detail";
import { Home } from "./layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
