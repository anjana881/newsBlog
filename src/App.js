import React from "react";
import "./index.css";
import Fetch from "./pages/Fetch";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Fetch /> <Outlet />
    </>
  );
}

export default App;
