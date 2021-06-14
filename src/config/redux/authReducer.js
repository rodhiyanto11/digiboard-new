
const reducer = {}
reducer.authReducer = (state,action) => {
    switch(action.type){
      case "LOGIN":
        localStorage.setItem("token",JSON.stringify(action.payload.user))
        localStorage.setItem("isAuthenticated",true)
        return {
          ...state,
          isAuthenticated : localStorage.getItem("isAuthenticated") == "true" ? true : false,
          token : localStorage.getItem("token")
        }
      case "LOGOUT":
        localStorage.clear()
        return {
          ...state,
          isAuthenticated : false,
          token : null
        }
      default : 
      return state
    }
  }
export default reducer