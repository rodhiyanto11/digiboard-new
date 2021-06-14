
import React from 'react'
import avatar from '../../../asset/images/avatars/1.jpg'
import authContext from '../../../config/context/authContext'
import {useHistory} from 'react-router-dom'
const Header = (props) => {
  const history = useHistory()
  const AuthContext = authContext
  const {dispatch} = React.useContext(AuthContext)
  const handleLogout = () => {
    try {
      dispatch ({
        type : "LOGOUT",
        payload : null
      })  
      // history.push("/auth")
    } catch (error) {
      
    }
    

}
    return (
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          <div className="logo-src"></div>
          <div
            className="header__pane ml-auto"
            onClick={() => props.changeNav(false)}
          >
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="app-header__mobile-menu"
          onClick={() => props.changeNav(true)}
        >
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
              data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>{" "}
        
        <div className="app-header__content" >
          <div className="app-header-left"></div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="btn-group">
                      <a
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="p-0 btn"
                      >
                        <img
                          width="42"
                          className="rounded-circle"
                          src={avatar}
                          alt=""
                        />
                        <i className="fa fa-angle-down ml-2 opacity-8"></i>
                      </a>
  
                      <div
                        tabindex="-1"
                        role="menu"
                        aria-hidden="true"
                        className="dropdown-menu dropdown-menu-right"
                      >
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          User Account
                        </button>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Settings
                        </button>
                        <h6 tabindex="-1" className="dropdown-header">
                          Header
                        </h6>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Actions
                        </button>
                        <div tabindex="-1" className="dropdown-divider"></div>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                          onClick={() => handleLogout()}
                        >
                          Logout
                        </button>
                      </div>
                      <div className="widget-content-left  ml-3 header-user-info">
                        <div className="widget-heading">Alina Mclourd</div>
                        <div className="widget-subheading">VP People Manager</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-header__content_mobile collapse" id="collapseExample" >
          <div className="app-header-left"></div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="btn-group">
                      <a
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="p-0 btn"
                      >
                        <img
                          width="42"
                          className="rounded-circle"
                          src={avatar}
                          alt=""
                        />
                        <i className="fa fa-angle-down ml-2 opacity-8"></i>
                      </a>
  
                      <div
                        tabindex="-1"
                        role="menu"
                        aria-hidden="true"
                        className="dropdown-menu dropdown-menu-right"
                      >
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          User Account
                        </button>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Settings
                        </button>
                        <h6 tabindex="-1" className="dropdown-header">
                          Header
                        </h6>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Actions
                        </button>
                        <div tabindex="-1" className="dropdown-divider"></div>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Dividers
                        </button>
                      </div>
                      <div className="widget-content-left  ml-3 header-user-info">
                        <div className="widget-heading">Alina Mclourd</div>
                        <div className="widget-subheading">VP People Manager</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;