const Footer = () => {
    return (
      <div className="app-wrapper-footer">
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">
              <ul className="nav">
                <li className="nav-item">
                  {/* <a href="javascript:void(0);" className="nav-link text-white" style={{opacity :1}}>
                    &copy; 2021 PT. Administrasi Medika
                  </a> */}
                </li>
                {/* <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 2
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="app-footer-right">
              <ul className="nav">
                {/* <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 3
                  </a>
                </li> */}
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link text-white">
                    {/* <div className="badge badge-success mr-1 ml-0">
                      <small>NEW</small>
                    </div> */}
                      &copy; 2021 PT. Administrasi Medika
                     
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  