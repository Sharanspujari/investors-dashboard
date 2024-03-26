import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/Investors.module.css";
import { ReactComponent as PrimaryButton } from "../assets/PrimaryButton.svg";
import profilePhoto from "../assets/image 1.png"
const InvestorsCard = ({ data }) => {
  const navigate = useNavigate();
  // const handleViewInvestor = () => {};
  return (
    <div className={style.cardWrapper}>
      <div className={style.statusWrapper}>
        <div className={style.ImageNameWrapper}>
          <img src={profilePhoto} alt="profileImage" />
          <div className={style.contactWrapper}>
            <span className={style.userName}>{data.investorName}</span>
            <span className={style.email}>{data.email}</span>
          </div>
        </div>
        <div
          className={data.status === "active" ? style.active : style.inactive}
        >
          {data.status === "active" ? "Active" : "Inactive"}
        </div>
      </div>

      <div className={style.centerDiv}>
        <div className={style.investmentsWrapper}>
          <span className={style.cardText}>₹{data.investorAccountNo}</span>
          <span className={style.labelText}>Investments</span>
        </div>
        <div className={style.investmentsWrapper}>
          <span className={style.cardText}>{data.city}</span>
          <span className={style.labelText}>Deals</span>
        </div>
        <div className={style.investmentsWrapper}>
          <span className={style.cardText}>{data.type}</span>
          <span className={style.labelText}>Type</span>
        </div>
      </div>

      <div className={style.btnWrappers}>
        <button
          className={style.createLogBtn}
          onClick={() => navigate(`/addinvestor/${data.id}`)}
        >
          <PrimaryButton />
        </button>
        <button
          onClick={() => navigate(`/investordetail/${data.id}`)}
          className={style.viewDetailsBtn}
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

export default InvestorsCard;
// width: 528px;
// height: 278px;
// gap: 0px;
// opacity: 0px;
