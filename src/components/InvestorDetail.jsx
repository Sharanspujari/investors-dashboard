import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import style from "../styles/InvestorDetails.module.css";
import userImage from "../assets/image 1.png";
import { ReactComponent as LeftArrowIcon } from "../assets/all-investor-left-arrow.svg";
import { ReactComponent as PrimaryButton } from "../assets/PrimaryButton.svg";

const InvestorDetail = () => {
  return (
    <DefaultLayout pageName={"Investor"} subPageName={">Rajesh Sinha"}>
      <div className={style.headerWrapper}>
        <div className={style.addInvestor}>
          <div className={style.IconNameWrapper}>
            <LeftArrowIcon />
            <img src={userImage} alt="profile image" />
            <span>Rajesh Sinha</span>
          </div>
          <div className={style.btnWrapper}>
            <PrimaryButton />
            <button className={style.addInvestorBtn}>SHARE REPORT</button>
          </div>
        </div>
        <div className={style.buttonsWrapper}>
          <button className={style.portfolioBtn}>PORTFOLIO</button>
          <button className={style.logBtn}>LOG</button>
          <button className={style.logBtn}>INVESTOR DETAILS</button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default InvestorDetail;
