
import React from 'react'
import authContext from '../src/config/context/authContext'
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
const Oauth = ({ match }) => {
    const history = useHistory()
    const AuthContext = authContext
    const { state, dispatch } = React.useContext(AuthContext)

    const handleValidateToken = () => {
        axios.post(`${process.env.REACT_APP_API_OAUTH}/api/verifytoken`, {

        },
            {
                headers: {
                    Authorization: 'Bearer ' + match.params.token
                }
            })
            .then((res) => {
                
                    dispatch({
                        type: "LOGIN",
                        payload: { user: match.params.token }
                    })
                
            })
            .catch(error => {
                alert(error.response.data)
            })
            
    }
    React.useEffect(() => {
        handleValidateToken()

    })
    if(state.isAuthenticated){
        return (
            <Redirect to="/app" />
        )
    }else{
        return(
            <Redirect to="/auth" />
        )  
    }
    // return (
    //     <div>OK</div>
    // )
}

export default Oauth