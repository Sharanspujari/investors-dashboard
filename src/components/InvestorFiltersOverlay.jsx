import React from "react";
import style from "../styles/InvestorFilter.module.css"
import {ReactComponent as CrossIcon} from "../assets/filter-icon.svg"
import {ReactComponent as DropdownDown} from "../assets/fluent_chevron-circle-down-28-regular.svg"
const InvestorFiltersOverlay = ({ isFilterOpen, setIsFilterOpen }) => {
  console.log("isFilterOpen: ", isFilterOpen);
  return (
    <div className={style.filterConatiner}>
     <div className={style.topWrapper}>
       <div>Filters</div>
       <div><CrossIcon/></div>
     </div>
     <div className={style.mainWrapper}>
      <div className={style.iconLabelContainer}>
      <span>Amount Invested</span>
        <DropdownDown/>
      </div>
       <div className={checboxWrapper}>
        <input type="checkbox" />
        <label>$10M-$20M</label>
       </div>
       <div className={checboxWrapper}>
        <input type="checkbox" />
        <label>$10M-$20M</label>
       </div>
       <div className={checboxWrapper}>
        <input type="checkbox" />
        <label>$10M-$20M</label>
       </div>
       <div className={checboxWrapper}>
        <input type="checkbox" />
        <label>$10M-$20M</label>
       </div>
     </div>
     <div></div>
     <div>

     </div>
    </div>
  );
};

export default InvestorFiltersOverlay;
