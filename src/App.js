import React from "react";
import "./App.css";
import { Routes, Route, useLocation, Navigation } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Investors from "./pages/Investors";
import PrimaryDeals from "./pages/PrimaryDeals";
import SecondaryDeals from "./pages/SecondaryDeals";
import Logs from "./pages/Logs";
import Companies from "./pages/Companies";
import AddInvestor from "./components/AddInvestor";
import InvestorDetail from "./components/InvestorDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/primarydeals" element={<PrimaryDeals />} />
        <Route path="/secondarydeals" element={<SecondaryDeals />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/addinvestor" element={<AddInvestor />} />
        <Route path="/addinvestor/:id" element={<AddInvestor />} />
        <Route path="/investordetail" element={<InvestorDetail />} />
        <Route path="investordetail/:id" element={<InvestorDetail />} />

        <Route path="/logs" element={<Logs />} />
      </Routes>
    </>
  );
};

export default App;
