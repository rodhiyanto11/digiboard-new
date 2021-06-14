import React,{Suspense} from 'react'
import authContext from '../src/config/context/authContext'
import history from '../src/config/history';
import Header from "../src/component/Layout/Header/Header";
import SideBar from "../src/component/Layout/SideBar/SideBar";
import Footer from "../src/component/Layout/Footer/Footer";
import router from '../src/config/router';
import $ from 'jquery'
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
const App = (props) => {
    const AuthContext = authContext
    const {state,dispatch} = React.useContext(AuthContext)
    
    const [states, setStates] = React.useState({
        statSideBar: true,
        verticalSideMenu: false,
        classSideBar:
            "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header",
    });
    const fSideBar = (mobile) => {
        
        if (mobile == true) {
            if (states.statSideBar == true) {
                setStates((prevState) => ({
                    ...prevState,
                    classSideBar:
                        "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar sidebar-mobile-open",
                }));
                setStates((prevState) => ({ ...prevState, statSideBar: false }));
            } else {
                setStates((prevState) => ({
                    ...prevState,
                    classSideBar:
                        "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar",
                }));
                setStates((prevState) => ({ ...prevState, statSideBar: true }));
            }
        } else {
            if (mobile == false) {
                if (states.statSideBar == true) {
                    setStates((prevState) => ({
                        ...prevState,
                        classSideBar:
                            "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar",
                    }));
                    setStates((prevState) => ({ ...prevState, statSideBar: false }));
                } else {
                    setStates((prevState) => ({
                        ...prevState,
                        classSideBar:
                            "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header ",
                    }));
                    setStates((prevState) => ({ ...prevState, statSideBar: true }));
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
  
    React.useEffect(() => {
        // console.log(props.routes)
    },[])
    if(!state.isAuthenticated){
            return (
                <Redirect to="/auth" />
            )
    }else{
        return(
            <div className="App">
      <div className={states.classSideBar}>
        <Header changeNav={(mobile) => fSideBar(mobile)} />
        <div className="app-main">
          <HashRouter>


            <Route component={SideBar} history={history}/>
            <div className="app-main__outer">
             
              <div className="app-main__inner ">
                <div className="layout-main">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Switch>

                      {props.routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                        
                      ))}
                      
                      <Redirect from="/" to="/dashboard_covid_admedika" />

                    </Switch>
                  </Suspense>
                </div>
              </div>
              
              <Footer />
            </div>

          </HashRouter>
        </div>
      </div>
    </div>
        )
    }
    
}

export default App

// import React, { Suspense } from "react";
// import history from '../src/config/history';
// import Header from "../src/component/Layout/Header/Header";
// import SideBar from "../src/component/Layout/SideBar/SideBar";
// import Footer from "../src/component/Layout/Footer/Footer";
// import router from '../src/config/router';
// import $ from 'jquery'

// import {
//   HashRouter,

//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom"
// function App(props) {
  
//   const [state, setState] = React.useState({
//     statSideBar: true,
//     verticalSideMenu: false,
//     classSideBar:
//     "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header",
//   });
//   const updateDimensions = () => {
//     if (document.getElementById('behind-map')) {
//       setTimeout(() => {
//         const height = document.getElementById('behind-map').offsetHeight;
//         $(".leaflet-container").height(height);
//         $(".map").height(height);
//       }, 400);

//     }

//     return null
//   }

//   const fSideBar = (mobile) => {
//     updateDimensions()
//     if (mobile == true) {
//       if (state.statSideBar == true) {
//         setState((prevState) => ({
//           ...prevState,
//           classSideBar:
//             "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar sidebar-mobile-open",
//         }));
//         setState((prevState) => ({ ...prevState, statSideBar: false }));
//       } else {
//         setState((prevState) => ({
//           ...prevState,
//           classSideBar:
//             "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar",
//         }));
//         setState((prevState) => ({ ...prevState, statSideBar: true }));
//       }
//     } else {
//       if (mobile == false) {
//         if (state.statSideBar == true) {
//           setState((prevState) => ({
//             ...prevState,
//             classSideBar:
//               "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar",
//           }));
//           setState((prevState) => ({ ...prevState, statSideBar: false }));
//         } else {
//           setState((prevState) => ({
//             ...prevState,
//             classSideBar:
//               "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header ",
//           }));
//           setState((prevState) => ({ ...prevState, statSideBar: true }));
//         }
//       }
//     }
//   };
//   const RouteWithSubRoutes = (route) => {
//     return (
//       <Route
//         path={route.path}
//         component={route.component}
//       // render={props => (
//       //   <route.component {...props} routes={route.routes} />
//       // )}
//       />
//     )

//   }
  
//   React.useEffect(() => {
//     console.log(props)
//   },[])
//   if(!state.isAuthenticated){
//                 return (
//                     <Redirect to="/auth" />
//                 )
//     }else{
//   return (

//     <div className="App">
//       <div className={state.classSideBar}>
//         <Header changeNav={(mobile) => fSideBar(mobile)} />
//         <div className="app-main">
//           <HashRouter>


//             <Route component={SideBar} history={history}/>
//             <div className="app-main__outer">
             
//               <div className="app-main__inner ">
//                 <div className="layout-main">
//                   <Suspense fallback={<div>Loading...</div>}>
//                     <Switch>

//                       {/* {router.map((route, i) => (
//                         <RouteWithSubRoutes key={i} {...route} />
                        
//                       ))} */}
                      
//                       {/* <Redirect from="/" to="/dashboard_covid_admedika" /> */}

//                     </Switch>
//                   </Suspense>
//                 </div>
//               </div>
              
//               <Footer />
//             </div>

//           </HashRouter>
//         </div>
//       </div>
//     </div>

//   );
// }
// }

// export default App;
