import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import style from "../styles/Investors.module.css";
import { ReactComponent as LeftArrowIcon } from "../assets/all-investor-left-arrow.svg";
import { ReactComponent as FilterIcon } from "../assets/filter-icon.svg";
import {investorsList} from "../components/JsonData"
const Investors = () => {
  return (
    <DefaultLayout pageName={"Investors"}>
      <div className={style.addInvestor}>
        <div className={style.IconNameWrapper}>
          <LeftArrowIcon />
          <span>All Investors</span>
        </div>
        <div className={style.btnWrapper}>
          <button className={style.addInvestorBtn}>ADD INVESTORS</button>
        </div>
      </div>
      <div className={style.searchAndFilterWrapper}>
        <input className={style.searchInputField}/>
        <button className={style.filterBtn}>
          <FilterIcon className={style.filterIcon}/>
           Filter
        </button>
      </div>
      <div className={style.InvestorsListWrapper}>
        {investorsList.map(()=>{

        })}
      </div>
    </DefaultLayout>
  );
};

export default Investors;
