import React, { useEffect, useState } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import style from "../styles/InvestorDetails.module.css";
import { useParams } from "react-router-dom";
import userImage from "../assets/image 1.png";
import { ReactComponent as LeftArrowIcon } from "../assets/all-investor-left-arrow.svg";
import { ReactComponent as PrimaryButton } from "../assets/PrimaryButton.svg";
import { ReactComponent as ManagementIcon } from "../assets/Funds 1.svg";
import { ReactComponent as IncestedIcon } from "../assets/invested-value-icon.svg";
import { ReactComponent as GrowthIcon } from "../assets/growth 1.svg";
import { ReactComponent as InvestedCompanyIcon } from "../assets/companies.svg";
import { ReactComponent as GreenUpIcon } from "../assets/green-up-arrow.svg";
const InvestorDetail = () => {
  const { id } = useParams();
  const [singleInvestors, setSingleInvestor] = useState([]);
  console.log("singleInvestors: ", singleInvestors.profilPhoto);
  console.log("id: ", id);

  useEffect(() => {
    if (localStorage.getItem("investors") !== null) {
      const investorsFromStorage = JSON.parse(
        localStorage.getItem("investors")
      );
      const selectedInvestor = investorsFromStorage.find(
        (inv) => inv.id === parseInt(id)
      );
      setSingleInvestor(selectedInvestor);
    }
  }, [id]);
  return (
    <DefaultLayout pageName={"Investor"} subPageName={">Rajesh Sinha"}>
      <div className={style.headerWrapper}>
        <div className={style.addInvestor}>
          <div className={style.IconNameWrapper}>
            <LeftArrowIcon />
            <img src={userImage} alt="profile image" />
            <span>{singleInvestors.investorName}</span>
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
      <div className={style.formContainer}>
        <div className={style.OverViewDiv}>
          <span className={style.OverView}>Investment Details</span>
        </div>
        <div className={style.fundDetailsContainer}>
          <div className={style.fundHeadWrapper}>
            <span>Fund Details</span>
            <span>Data as on 23 Feb 2023</span>
          </div>

          <div className={style.fundCardWrapper}>
            {/* first */}
            <div className={style.fundDataDiv}>
              <ManagementIcon />
              <span className={style.fundHead}>Funds Under Management</span>
              <span className={style.fundValue}>$20,000,000</span>
            </div>

            {/* second */}
            <div className={style.fundDataDiv}>
              <IncestedIcon />
              <span className={style.fundHead}>Invested value</span>
              <span className={style.fundValue}>$15,000,000</span>
            </div>
            {/* thoird */}
            <div className={style.fundDataDiv}>
              <GrowthIcon />
              <span className={style.fundHead}>Current Portfolio Value</span>
              <span className={style.fundValue}>$23,600,000</span>
            </div>
            {/* four */}
            <div className={style.fundDataDiv}>
              <GrowthIcon />
              <span className={style.fundHead}>Growth Ratio</span>
              <div className={style.growIconWrapper}>
                <span className={style.fundValue}>$24%</span>
                <GreenUpIcon />
              </div>
            </div>
            {/* five */}
            <div className={style.fundDataDiv}>
              <InvestedCompanyIcon />
              <span className={style.fundHead}>Invested No of Comapanies</span>
              <span className={style.fundValue}>06</span>
            </div>
            {/* six */}
            <div className={style.fundDataDiv}>
              <InvestedCompanyIcon />
              <span className={style.fundHead}>Primary Deals</span>
              <span className={style.fundValue}>04</span>
            </div>
            {/* seven */}
            <div className={style.fundDataDiv}>
              <InvestedCompanyIcon />
              <span className={style.fundHead}>Secondary Deals</span>
              <span className={style.fundValue}>08</span>
            </div>
            {/* eigth */}
            <div className={style.fundDataDiv}>
              <GrowthIcon />
              <span className={style.fundHead}>Growth Ration</span>
              <span className={style.fundValue}>24%</span>
            </div>
          </div>
          <div className={style.logDetails}>Log Details</div>
          <div className={style.logsGridContainer}>
            {/* first card */}
            <div className={style.card}>
              <div className={style.logNumber}>#U21086BA12</div>

              <div className={style.detailGridContainer}>
                {/* first card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>
                      {singleInvestors.investorName}
                    </span>
                  </div>
                </div>

                {/* second card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>
                      Transaction type
                    </span>
                    <span className={style.investorName}>Buy</span>
                  </div>
                </div>
                {/* third */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Company</span>
                    <span className={style.investorName}>SkillKonnect</span>
                  </div>
                </div>
                {/* four */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Status</span>
                    <div className={style.logInfostatus}>Committed</div>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Created date</span>
                    <span className={style.investorName}>01-02-2024</span>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Type</span>
                    <span className={style.investorName}>Long</span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailDiv}>
                <button className={style.viewDetailsBtn}>View Details</button>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.logNumber}>#U21086BA12</div>

              <div className={style.detailGridContainer}>
                {/* first card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>

                {/* second card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                {/* third */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                {/* four */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Status</span>
                    <div className={style.founded}>Founded</div>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailDiv}>
                <button className={style.viewDetailsBtn}>View Details</button>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.logNumber}>#U21086BA12</div>

              <div className={style.detailGridContainer}>
                {/* first card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>

                {/* second card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                {/* third */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                {/* four */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Status</span>
                    <div className={style.founded}>Founded</div>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailDiv}>
                <button className={style.viewDetailsBtn}>View Details</button>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.logNumber}>#U21086BA12</div>

              <div className={style.detailGridContainer}>
                {/* first card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>

                {/* second card */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                {/* third */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                {/* four */}
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Status</span>
                    <div className={style.logInfostatus}>Committed</div>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
                <div className={style.logCardDetail}>
                  <div className={style.textName}>
                    <span className={style.investerLabel}>Investor Name</span>
                    <span className={style.investorName}>Rajesh Sinha</span>
                  </div>
                </div>
              </div>
              <div className={style.viewDetailDiv}>
                <button className={style.viewDetailsBtn}>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default InvestorDetail;
