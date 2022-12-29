import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/login";
import Register from  "./components/register";
import HomePage from  "./components/homepage";
import Create from  "./components/create";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/homepage" element={<HomePage/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
