import React, { useState } from "react";
import SidebarLinkGroup from "./SidebarLinkGroup";
import style from "../styles/Sidebar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { ReactComponent as Klucide } from "../assets/Klucid.svg";
import { ReactComponent as DashboardIcon } from "../assets/dashboard-icon.svg";
import { ReactComponent as CompaniesIcon } from "../assets/companies-icon.svg";
import { ReactComponent as DealsIcon } from "../assets/deals-icon.svg";
import { ReactComponent as DropdownIcon } from "../assets/gg_chevron-up-o.svg";
import { ReactComponent as InvetsorsIcon } from "../assets/investors-icon.svg";
import { ReactComponent as LogsIcon } from "../assets/Log 4.svg";
import { ReactComponent as RightArrow } from "../assets/gg_chevron-right-arrow.svg";
import userImage from "../assets/image 1.png";
import PrimaryDeals from "../pages/PrimaryDeals";
const Sidebar = ({ isActive }) => {
  const location = useLocation();
  const { pathName } = location;
  console.log("pathName: ", pathName);
  const [sidebarExpanded, setSidebarExpanded] = useState();

  return (
    <aside className={style.sidebar_Wrapper}>
      <NavLink to="/">
        <div className={style.logoContainer}>
          <img src={logo} alt="logo" />
          <Klucide />
        </div>
      </NavLink>

      <div className={style.linksContainer}>
        <nav>
          <ul className={style.ulWrapper}>
            <li>
              <NavLink to="/" className={style.navLink}>
                <DashboardIcon style={{ fill: "blue" }} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/companies" className={style.navLink}>
                <CompaniesIcon />
                Companies
              </NavLink>
            </li>

            <SidebarLinkGroup activeCondition={pathName === "/deals"}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <NavLink
                      to="#"
                      className={style.navLink}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <div className={style.dropdownList}>
                        <DealsIcon />
                        Deals
                      </div>

                      <DropdownIcon
                        className={
                          open
                            ? style.openWithrotateIcon
                            : style.notopenrotateIcon
                        }
                      />
                    </NavLink>
                    {/* Dropdown menu start */}
                    <div className={!open && style.openClose}>
                      <ul className={style.subMenuUl}>
                        <li className={style.liPrimaryDeals}>
                          <NavLink className={style.navLink} to="/primarydeals">
                            Primary Deals
                          </NavLink>
                        </li>
                        <li className={style.liPrimaryDeals}>
                          <NavLink
                            className={style.navLink}
                            to="/secondarydeals"
                          >
                            Secondary Deals
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            <li>
              <NavLink className={style.navLink} to="/investors">
                <InvetsorsIcon />
                Investors
              </NavLink>
            </li>
            <li>
              <NavLink className={style.navLink} to="/logs">
                <LogsIcon />
                Logs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.profileContainer}>
        <div className={style.imgNameWrapper}>
          <img src={userImage} alt="User profile image" />
          <p>Sayd Afjal</p>
        </div>
        <div>
          <RightArrow />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
