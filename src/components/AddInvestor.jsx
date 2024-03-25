import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import style from "../styles/Investors.module.css";
import { ReactComponent as ProfilePhotoIcon } from "../assets/profile-photo-icon.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/all-investor-left-arrow.svg";
import { ReactComponent as ChooseIcon } from "../assets/Frame 242016.svg";
const AddInvestor = () => {
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
        <form>
          <div className={style.formWrapper}>
            <div className={style.leftWrapper}>
              <div className={style.InputWrapper}>
                <label className={style.labelText}>
                  Investor Profile Photo
                </label>
                <ProfilePhotoIcon className={style.gallaryIcon} />
                <input
                  type=""
                  accept="image/*"
                  className={style.profileInput}
                />
                <ChooseIcon className={style.ChooseIcon} />
              </div>

              <div className={style.InputWrapper}>
                <label>Investor Email Address</label>
                <input
                  type="email"
                  className={style.inputField}
                  placeholder="Enter email address"
                />
              </div>

              <div className={style.InputWrapper}>
                <label>Choose Country</label>
                <select className={style.inputField}>
                  <option></option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div className={style.InputWrapper}>
                <label>Investor Type</label>
                <select className={style.inputField}>
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
                  className={style.inputField}
                  placeholder="Enter account no"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>Subsidairy Bank Name</label>
                <input
                  type="text"
                  className={style.inputField}
                  placeholder="Enter subsidairy bank name"
                />
              </div>
            </div>

            <div className={style.rightWrapper}>
              <div className={style.InputWrapper}>
                <label>Investor Name</label>
                <input
                  type="email"
                  className={style.inputField}
                  placeholder="Enter investor name"
                />
              </div>

              <div className={style.InputWrapper}>
                <label>Contact Number</label>
                <input
                  type="text"
                  className={style.inputField}
                  placeholder="Enter contact no"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>City</label>
                <select className={style.inputField}>
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
                  className={style.inputField}
                  placeholder="Investor bank name"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>Subsidairy Email-id</label>
                <input
                  type="text"
                  className={style.inputField}
                  placeholder="Enter email id"
                />
              </div>
              <div className={style.InputWrapper}>
                <label>Subsidairy Account NO</label>
                <input
                  type="text"
                  className={style.inputField}
                  placeholder="Enter accoutnt no"
                />
              </div>
            </div>
          </div>
          <button className={style.submitBtn}>SUBMIT</button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default AddInvestor;
