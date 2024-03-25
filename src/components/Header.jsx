import React from "react";
import style from "../styles/Header.module.css";
const Header = ({ pageName, subPageName }) => {
  return (
    <header className={style.header_wrapper}>
      <div className={style.breadCrums}>
        <div className={style.pageName}>{pageName}</div>
        <div className={style.subheading}>
          {pageName}
          {subPageName}
        </div>
      </div>
    </header>
  );
};

export default Header;
