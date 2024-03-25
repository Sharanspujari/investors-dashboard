import React, { useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import style from "../styles/Investors.module.css";
import { ReactComponent as LeftArrowIcon } from "../assets/all-investor-left-arrow.svg";
import { ReactComponent as FilterIcon } from "../assets/filter-icon.svg";
import { investorsList } from "../components/JsonData";
import InvestorsCard from "../components/InvestorsCard";
import { NavLink } from "react-router-dom";
import InvestorFiltersOverlay from "../components/InvestorFiltersOverlay";
const Investors = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <DefaultLayout pageName={"Investors"}>
      <div className={style.addInvestor}>
        <div className={style.IconNameWrapper}>
          <LeftArrowIcon />
          <span>All Investors</span>
        </div>
        <div className={style.btnWrapper}>
          <NavLink to="/addinvestor">
            <button className={style.addInvestorBtn}>ADD INVESTORS</button>
          </NavLink>
        </div>
      </div>
      <div className={style.searchAndFilterWrapper}>
        <input className={style.searchInputField} placeholder="Search" />
        <button
          className={style.filterBtn}
          onClick={() => setIsFilterOpen(true)}
        >
          <FilterIcon className={style.filterIcon} />
          FILTER
        </button>
      </div>
      {isFilterOpen && <InvestorFiltersOverlay isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>}
      <div className={style.InvestorsListWrapper}>
        {investorsList.map((data, i) => {
          return <InvestorsCard key={data.id} data={data} />;
        })}
      </div>
    </DefaultLayout>
  );
};

export default Investors;
