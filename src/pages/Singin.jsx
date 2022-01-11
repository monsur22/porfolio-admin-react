import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction';

const Singin =  ({location}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  navigate = useNavigate();

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const {  userInfo } = userLogin

    // const redirect = location.state ? location.state.split('=')[1] : '/'
    useEffect(() => {
        if (userInfo){
            navigate('/', {replace: true});
        }
    }, [navigate, userInfo])

    function submitHandler (e){
        e.preventDefault()
        dispatch(login(email, password))
    }
    return (
        <>
            <div className="authentication">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <form className="card auth_form" >
                    <div className="header">
                        <img className="logo" src="assets/images/logo.svg" alt=""/>
                        <h5>Log in</h5>
                    </div>
                    <div className="body">
                        <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-account-circle" /></span>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="input-group-append">
                            <span className="input-group-text"><a href="forgot-password.html" className="forgot" title="Forgot Password"><i className="zmdi zmdi-lock" /></a></span>
                        </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light"onClick={submitHandler}>SIGN IN</button>

                    </div>
                    </form>
                    <div className="copyright text-center">
                    ©
                    ,
                    <span><a href="templatespoint.net">BugfreeSoft</a></span>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="card">
                    <img src="assets/images/signin.svg" alt=""/>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Singin
