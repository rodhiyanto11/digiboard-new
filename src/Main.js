import React, { Suspense, useReducer } from "react";
import authContext from './config/context/authContext'
import reducer from './config/redux/authReducer'
import router from '../src/config/router';

import {
  HashRouter,

  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom"




const Main = (props) => {
  const initialState = {
    isAuthenticated: localStorage.getItem("isAuthenticated") == "true" ? true : false,
    user: null,
    token: localStorage.getItem("token") != null ? localStorage.getItem("token") : null
  }
  const AuthContext = authContext
  const [state, dispatch] = useReducer(reducer.authReducer, initialState)
  
  const RouteWithSubRoutes = (route) => {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    )

  }
  const history = useHistory()
  return (
    <div className="App">
      <HashRouter>
        <Route/>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <AuthContext.Provider value={{ state, dispatch }}>
              {router.map((route, i) => (

                <RouteWithSubRoutes key={i} {...route} />

              ))}
              {/* <Redirect from="/" to="/app" /> */}
              {/* {!state.isAuthenticated ? <Redirect to="/auth" /> : <Redirect to="/app" />} */}
            </AuthContext.Provider>
          </Switch>
        </Suspense>

      </HashRouter>
    </div>
  )
}

export default Main;

