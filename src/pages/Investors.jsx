import React, { useEffect, useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import style from "../styles/Investors.module.css";
import { ReactComponent as LeftArrowIcon } from "../assets/all-investor-left-arrow.svg";
import { ReactComponent as FilterIcon } from "../assets/filter-icon.svg";
// import { investorsList } from "../components/JsonData";
import InvestorsCard from "../components/InvestorsCard";
import { NavLink } from "react-router-dom";
import InvestorFiltersOverlay from "../components/InvestorFiltersOverlay";
const Investors = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  console.log("isFilterOpenm: ", isFilterOpen);
  const [totalInvestors, setTotalInvestors] = useState([]);
  console.log('totalInvestors: ', totalInvestors);
  const handleFilterClick = (e) => {
    e.stopPropagation();
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    const investorsList = JSON.parse(localStorage.getItem("investors"));
    if (investorsList) {
      setTotalInvestors(investorsList);
    }
  }, []);

  return (
    <DefaultLayout pageName={"Investors"}>
      {isFilterOpen && (
        <div className="investor-filters-overlay">
          <div className="investor-filters-content">
            {/* Content of the overlay */}
            <h2>Investor Filters</h2>
            {/* Add your filter options here */}
            <button onClick={() => setIsFilterOpen(false)}>Close</button>
          </div>
        </div>
      )}

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
        <button className={style.filterBtn} onClick={handleFilterClick}>
          <FilterIcon className={style.filterIcon} />
          FILTER
        </button>
      </div>
      <div className={style.InvestorsListWrapper}>
        {totalInvestors.map((data, i) => {
          return <InvestorsCard key={data.id} data={data} />;
        })}
      </div>
    </DefaultLayout>
  );
};

export default Investors;
