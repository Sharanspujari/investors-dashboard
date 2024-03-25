import React from "react";
import style from "../styles/Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={style.sidebar_Wrapper}>
      <div className={style.logoContainer}></div>
      <div className={style.linksContainer}>Links</div>
      <div className={style.profileContainer}></div>
    </aside>
  );
};

export default Sidebar;
