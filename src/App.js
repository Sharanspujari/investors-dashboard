import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Home />
      {/* <Dashboard /> */}
    </>
  );
};

export default App;
