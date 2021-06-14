import React from 'react'
import {NavLink} from 'react-router-dom'
import authContext from '../../../config/context/authContext'
import $ from 'jquery'
const SideBar =   () => {
  const AuthContext = authContext
  const {dispatch} = React.useContext(AuthContext)
  const handleAhref = (e) => {
    e.preventDefault()
  }
  // const activeStyles = {
  //       fontWeight: "bold",
  //       background: "#b71c1c",  
  //       color : "#ffffff !important"/* fallback for old browsers */
  // }
  // const iconActiveStyles = {
  //       fontWeight: "bold",
  //       color : "#ffffff !important"  /* fallback for old browsers */
  // }
  const handleLogout = (e) => {
    e.preventDefault()
    try {
      dispatch ({
        type : "LOGOUT",
        payload : null
      })  
      // history.push("/auth")
    } catch (error) {
      
    }
}
  React.useEffect(() => {
    var side = $(".vertical-nav-menu li a");
    var i;

    for (i = 0; i < side.length; i++) {
      side[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content != null ){
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        }
        
      });
    }
  }, []);
    return (
      <div className="app-sidebar sidebar-shadow">
        {/* <div className="app-header__logo">
          <div className="logo-src"></div>
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                data-className="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div> */}
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
  
        <div className="scrollbar-sidebar">
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
              <li className="app-sidebar__heading">Dashboards</li>
              <li>
                <NavLink  to="/dashboard_covid_admedika">
                <i className="metismenu-icon pe-7s-rocket"></i>
                  Covid Admedika
                </NavLink>
              </li>
              <li>
               <NavLink to="/dashboard-test"
               >
                <i className="metismenu-icon pe-7s-rocket"></i>
                  Kalsel Overview
                </NavLink>
              </li>
  
              <li className="app-sidebar__heading">My Account</li>
              <li>
                <a href="#" onClick={(e) => handleAhref(e)}>
                  <i className="metismenu-icon pe-7s-tools"></i>
                  Setting
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul>
                <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Profile
                    </a>
                  </li>
                  <li>
                    <a href="elements-buttons-standard.html">
                      <i className="metismenu-icon"></i>
                      Change Password
                    </a>
                  </li>
                  {/* <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Dropdowns
                    </a>
                  </li>
                  <li>
                    <a href="elements-icons.html">
                      <i className="metismenu-icon"></i>Icons
                    </a>
                  </li>
                  <li>
                    <a href="elements-badges-labels.html">
                      <i className="metismenu-icon"></i>Badges
                    </a>
                  </li>
                  <li>
                    <a href="elements-cards.html">
                      <i className="metismenu-icon"></i>Cards
                    </a>
                  </li>
                  <li>
                    <a href="elements-list-group.html">
                      <i className="metismenu-icon"></i>List Groups
                    </a>
                  </li>
                  <li>
                    <a href="elements-navigation.html">
                      <i className="metismenu-icon"></i>Navigation Menus
                    </a>
                  </li>
                  <li>
                    <a href="elements-utilities.html">
                      <i className="metismenu-icon"></i>Utilities
                    </a>
                  </li> */}
                </ul>
              </li>
              <li>
                <a hre="#" onClick={(e) => handleLogout(e)} style={{cursor: "pointer"}} >
                  <i className="metismenu-icon pe-7s-power"></i>
                  Logout
                </a>
              </li>
              {/* <li className="app-sidebar__heading">Widgets</li>
              <li>
                <a href="dashboard-boxes.html">
                  <i className="metismenu-icon pe-7s-display2"></i>
                  Dashboard Boxes
                </a>
              </li>
              <li className="app-sidebar__heading">Forms</li>
              <li>
                <a href="forms-controls.html">
                  <i className="metismenu-icon pe-7s-mouse"></i>Forms Controls
                </a>
              </li>
              <li>
                <a href="forms-layouts.html">
                  <i className="metismenu-icon pe-7s-eyedropper"></i>Forms Layouts
                </a>
              </li>
              <li>
                <a href="forms-validation.html">
                  <i className="metismenu-icon pe-7s-pendrive"></i>Forms
                  Validation
                </a>
              </li>
              <li className="app-sidebar__heading">Charts</li>
              <li>
                <a href="charts-chartjs.html">
                  <i className="metismenu-icon pe-7s-graph2"></i>ChartJS
                </a>
              </li>
              <li className="app-sidebar__heading">PRO Version</li>
              <li>
                <a
                  href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/"
                  target="_blank"
                >
                  <i className="metismenu-icon pe-7s-graph2"></i>
                  Upgrade to PRO
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default React.memo(SideBar);
  