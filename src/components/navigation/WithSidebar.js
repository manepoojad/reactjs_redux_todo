import React from "react";
import { SidebarData } from "./SidebarData";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

function WithSidebar(props) {
  const navigate = useNavigate();
  const logoutObject = {
    title: "LogOut",
    icon: <LogoutIcon />,
    link: "/logIn",
  };

  const handleUserLogout = () => {
    localStorage.removeItem("loginData");
    navigate("/login");
  };
  return (
    <div className="routesWrapper">
      <div className="sidebar">
        <ul className="sidebarList">
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.link} className="ancharTagsideBarRow">
                  <div className="sideBarIcon">{item.icon}</div>
                  <div className="sideBarTitle">{item.title}</div>
                </NavLink>
              </li>
            );
          })}
          <li>
            <a
              className="ancharTagsideBarRow"
              onClick={() => handleUserLogout()}
            >
              <div className="sideBarIcon">{logoutObject.icon}</div>
              <div className="sideBarTitle">{logoutObject.title}</div>
            </a>
          </li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>{props.children}</div>
    </div>
  );
}

export default WithSidebar;
