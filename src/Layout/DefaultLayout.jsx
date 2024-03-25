import React from "react";
import style from "../styles/DefaultLayout.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DefaultLayout = ({ children, pageName }) => {
  console.log("children: ", children);
  return (
    <div className={style.defaultLayout_container}>
      <Sidebar />
      <div className={style.headerandMain_wrapper}>
        {/* <div>Header</div> */}
        <Header pageName={pageName} />
        <main>
          <div className={style.childrenWrapper}>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
