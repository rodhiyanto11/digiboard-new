import './Auth.scss'
import React,{useContext} from 'react'
import { Redirect,useHistory } from 'react-router-dom';
import authContext from '../src/config/context/authContext'
import HumansImg from '../src/asset/images/digiboard.png'
import axios from 'axios'
const Auth = (props) => {
    const history = useHistory();
    const AuthContext = authContext
    const {state,dispatch} = useContext(AuthContext)
   
    const handleSubmit = (props) => {
        // alert(process.env.REACT_APP_API_OAUTH)
        axios.post(`${process.env.REACT_APP_API_OAUTH}`+"/oauth/login", {
            "client_id": `${process.env.REACT_APP_OAUTH_CLIENT_ID}`,
            "client_secret": `${process.env.REACT_APP_OAUTH_CLIENT_SECRET}`
        })
        .then((res) => {
            // alert(process.env.REACT_APP_OAUTH_CLIENT_SECRET)
            window.open(`${process.env.REACT_APP_URL_AUTH}/${encodeURIComponent('client_id='+res.data.client_id+'&destination='+res.data.redirect_uri+'&token='+res.data.token)}`,"_self")
        })
        .catch((err) => {
            console.log(err)
        })
        
    }
    React.useEffect(() => {
        // console.log(props.route)
    },[])
    if(state.isAuthenticated){
        return (
            <Redirect to="/" />
        )
    }else{
        return(
         
        <div className="auth">
        <div className="auth__outer">
            <section className="auth__inner">
                <div className="auth__title">
                    {/* <p >Please log in to your account... </p> */}
                </div>
                <div className="auth__box">
                    <div className="col-md-12">
                        <div className="row auth-layout">
                        
                            <section className="auth-form col-md-6">
                                <div className="row container">
                                    <div className="form-input">
                                        <div className="row">
                                            <img src={HumansImg} className="auth-img col-md-12" />
                                        </div>
                                        <div className="row mt-5">
                                        <div className="col btn-submit">
                                            <button className="auth-submit" 
                                            onClick={() => handleSubmit()}
                                            >
                                                Login</button>
                                        </div>
                                    </div>
                                    </div>
                                    
                                   
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        )
    }
}

export default Auth