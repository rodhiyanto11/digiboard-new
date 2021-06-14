import React, { Suspense } from "react";
import history from '../src/config/history';
import Header from "../src/component/Layout/Header/Header";
import SideBar from "../src/component/Layout/SideBar/SideBar";
import Footer from "../src/component/Layout/Footer/Footer";
import routes from './config/routes/routes'
import $ from 'jquery'

import {
  HashRouter,

  Switch,
  Route,
  Redirect
} from "react-router-dom"
function Main() {
  
  const [state, setState] = React.useState({
    statSideBar: true,
    verticalSideMenu: false,
    classSideBar:
    "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header",
  });
  const updateDimensions = () => {
    if (document.getElementById('behind-map')) {
      setTimeout(() => {
        const height = document.getElementById('behind-map').offsetHeight;
        $(".leaflet-container").height(height);
        $(".map").height(height);
      }, 400);

    }

    return null
  }

  const fSideBar = (mobile) => {
    updateDimensions()
    if (mobile == true) {
      if (state.statSideBar == true) {
        setState((prevState) => ({
          ...prevState,
          classSideBar:
            "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar sidebar-mobile-open",
        }));
        setState((prevState) => ({ ...prevState, statSideBar: false }));
      } else {
        setState((prevState) => ({
          ...prevState,
          classSideBar:
            "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar",
        }));
        setState((prevState) => ({ ...prevState, statSideBar: true }));
      }
    } else {
      if (mobile == false) {
        if (state.statSideBar == true) {
          setState((prevState) => ({
            ...prevState,
            classSideBar:
              "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar",
          }));
          setState((prevState) => ({ ...prevState, statSideBar: false }));
        } else {
          setState((prevState) => ({
            ...prevState,
            classSideBar:
              "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header ",
          }));
          setState((prevState) => ({ ...prevState, statSideBar: true }));
        }
      }
    }
  };
  const RouteWithSubRoutes = (route) => {
    return (
      <Route
        path={route.path}
        component={route.component}
      // render={props => (
      //   <route.component {...props} routes={route.routes} />
      // )}
      />
    )

  }
  const [token, setToken] = React.useState();
  React.useEffect(() => {
    // if(!localStorage.token){
    //   window.location.href = "http://localhost:3000"
    // }
  })
  return (

    <div className="App">
      <div className={state.classSideBar}>
        <Header changeNav={(mobile) => fSideBar(mobile)} />
        <div className="app-main">
          <HashRouter>


            <Route component={SideBar} history={history}/>
            <div className="app-main__outer">
              {/* content */}
              <div className="app-main__inner ">
                <div className="layout-main">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Switch>

                      {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                        // <Route exact path={route.path} component={route.component}/> 
                      ))}
                      {/* <Route exact path='/dashboard_covid_admedika' component={DashboardCovidAdmedika}/> */}
                      <Redirect from="/" to="/dashboard_covid_admedika" />

                    </Switch>
                  </Suspense>
                </div>
              </div>
              {/* content */}
              <Footer />
            </div>

          </HashRouter>
        </div>
      </div>
    </div>

  );
}

export default Main;
