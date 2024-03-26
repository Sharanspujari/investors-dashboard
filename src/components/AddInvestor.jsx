import React, { useState, useEffect } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import { useParams } from "react-router-dom";
import style from "../styles/Investors.module.css";
import { ReactComponent as ProfilePhotoIcon } from "../assets/profile-photo-icon.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/all-investor-left-arrow.svg";
import { ReactComponent as ChooseIcon } from "../assets/Frame 242016.svg";
const AddInvestor = () => {
  const { id } = useParams();

  const [investorData, setInvestorData] = useState([]);
  const [investorsDetail, setInvestorsDetail] = useState({
    profilPhoto: "",
    email: "",
    country: "",
    type: "",
    investorAccountNo: "",
    subsidairyBankName: "",
    investorName: "",
    contactNumber: "",
    city: "",
    investorBank: "",
    subsidairyEmailId: "",
    subsidairyBankName: "",
    subsidairyAccountNo: "",
  });
  console.log("investorsDetail:", investorsDetail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("value: ", value);
    console.log("name: ", name);
    setInvestorsDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvestor = { id: Date.now(), ...investorsDetail };
    const updatedInvestors = [...investorData, newInvestor];
    setInvestorData(updatedInvestors);
    localStorage.setItem("investors", JSON.stringify(updatedInvestors));
    setInvestorsDetail({
      profilPhoto: "",
      email: "",
      country: "",
      type: "",
      investorAccountNo: "",
      subsidairyBankName: "",
      investorName: "",
      contactNumber: "",
      city: "",
      investorBank: "",
      subsidairyEmailId: "",
      subsidairyBankName: "",
      subsidairyAccountNo: "",
    });
  };

  useEffect(() => {
    if (localStorage.getItem("investors") !== null) {
      const investorsFromStorage = JSON.parse(
        localStorage.getItem("investors")
      );
      const selectedInvestor = investorsFromStorage.find(
        (inv) => inv.id === parseInt(id)
      );
      setInvestorsDetail(selectedInvestor);
      // if (selectedInvestor.profilPhoto !== undefined) {
      //   const { profilPhoto, ...investorDetailsWithoutPhoto } =
      //     selectedInvestor;
      //   console.log("profilePhoto: ", profilPhoto);
        
      // }
    }
  }, [id]);

  return (
    <DefaultLayout pageName={"Investors"} subPageName={">Add Investor"}>
      <div className={style.addInvestor}>
        <div className={style.IconNameWrapper}>
          <LeftArrowIcon />
          <span>All Investors</span>
        </div>
      </div>
      <div className={style.formContainer}>
        <div className={style.OverViewDiv}>
          <span className={style.OverView}>OverView</span>
        </div>

        {/* Form start from here */}
        <form onSubmit={handleSubmit}>
          <div className={style.formWrapper}>
            <div className={style.leftWrapper}>
              <div className={style.InputWrapper}>
                <label className={style.labelText}>
                  Investor Profile Photo
                </label>
                <ProfilePhotoIcon className={style.gallaryIcon} />
                <input
                  type="file"
                  accept="image/*"
                  name="profilPhoto"
                  disabled
                  value={investorsDetail?.profilPhoto}
                  onChange={handleChange}
                  className={style.profileInput}
                />
                <ChooseIcon className={style.ChooseIcon} />
              </div>

              <div className={style.InputWrapper}>
                <label>Investor Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={investorsDetail?.email}
                  onChange={handleChange}
                  className={style.inputField}
                  placeholder="Enter email address"
                />
              </div>

              <div className={style.InputWrapper}>
                <label>Choose Country</label>
                <select
                  name="country"
                  value={investorsDetail?.country}
                  onChange={handleChange}
                  className={style.inputField}
                >
                  <option></option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div className={style.InputWrapper}>
                <label>Investor Type</label>
                <select
                  name="type"
                  value={investorsDetail?.type}
                  onChange={handleChange}
                  className={style.inputField}
                >
                  <option></option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              <div className={style.InputWrapper}>
                <label>Investor Account NO</label>
                <input
                  type="text"
                  name="investorAccountNo"
                  value={investorsDetail?.investorAccountNo}
                  onChange={handleChange}
                  className={style.inputField}
                  placeholder="Enter account no"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>Subsidairy Bank Name</label>
                <input
                  type="text"
                  name="subsidairyBankName"
                  value={investorsDetail?.subsidairyBankName}
                  className={style.inputField}
                  onChange={handleChange}
                  placeholder="Enter subsidairy bank name"
                />
              </div>
            </div>

            <div className={style.rightWrapper}>
              <div className={style.InputWrapper}>
                <label>Investor Name</label>
                <input
                  type="text"
                  name="investorName"
                  value={investorsDetail?.investorName}
                  onChange={handleChange}
                  className={style.inputField}
                  placeholder="Enter investor name"
                />
              </div>

              <div className={style.InputWrapper}>
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={investorsDetail?.contactNumber}
                  onChange={handleChange}
                  className={style.inputField}
                  placeholder="Enter contact no"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>City</label>
                <select
                  name="city"
                  value={investorsDetail?.city}
                  onChange={handleChange}
                  className={style.inputField}
                >
                  <option></option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>

              <div className={style.InputWrapper}>
                <label>Investor Bank </label>
                <input
                  type="text"
                  name="investorBank"
                  value={investorsDetail?.investorBank}
                  onChange={handleChange}
                  className={style.inputField}
                  placeholder="Investor bank name"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>Subsidairy Email-id</label>
                <input
                  type="text"
                  name="subsidairyEmailId"
                  value={investorsDetail?.subsidairyEmailId}
                  onChange={handleChange}
                  className={style.inputField}
                  placeholder="Enter email id"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>Subsidairy Account NO</label>
                <input
                  type="text"
                  name="subsidairyAccountNo"
                  value={investorsDetail?.subsidairyAccountNo}
                  onChange={handleChange}
                  className={style.inputField}
                  placeholder="Enter accoutnt no"
                />
              </div>
            </div>
          </div>
          <button className={style.submitBtn}>
            {id ? "UPDATE" : "SUBMIT"}
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default AddInvestor;
