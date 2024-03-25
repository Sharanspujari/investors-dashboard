import React, { useState } from "react";
import style from "../styles/Sidebar.module.css";
const SidebarLinkGroup = ({ children, activeCondition }) => {
  const [open, setOpen] = useState(activeCondition);
  const handleClick = () => {
    setOpen(() => !open);
  };
  return <li className={style.subMenuList}>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
