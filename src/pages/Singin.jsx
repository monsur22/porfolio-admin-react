import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction';

const Singin =  ({location}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  navigate = useNavigate();

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { error, userInfo } = userLogin

    // const redirect = location.state ? location.state.split('=')[1] : '/'
    useEffect(() => {
        if (userInfo){
            // navigate(redirect,{replace: true})
            navigate('/', {replace: true});
        }
    }, [ userInfo])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        // <div className='container'>
        //     <form onSubmit={submitHandler}>
        //         <div className="form-group mt-3">
        //             <label htmlFor="exampleInputEmail1">Email address</label>
        //             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
        //         </div>
        //         <div className="form-group mt-3">
        //             <label htmlFor="exampleInputPassword1">Password</label>
        //             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete='off'onChange={(e) => setPassword(e.target.value)}/>
        //         </div>
        //         <button type="submit" className="btn btn-primary mt-2">Submit</button>
        //     </form>
        // </div>
        <>
            <div className="authentication">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <form className="card auth_form">
                    <div className="header">
                        <img className="logo" src="assets/images/logo.svg" alt />
                        <h5>Log in</h5>
                    </div>
                    <div className="body">
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-account-circle" /></span>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                            <span className="input-group-text"><a href="forgot-password.html" className="forgot" title="Forgot Password"><i className="zmdi zmdi-lock" /></a></span>
                        </div>
                        </div>
                        <div className="checkbox">
                        <input id="remember_me" type="checkbox" />
                        <label htmlFor="remember_me">Remember Me</label>
                        </div>
                        <a href="index.html" className="btn btn-primary btn-block waves-effect waves-light">SIGN IN</a>
                        <div className="signin_with mt-3">
                        <p className="mb-0">or Sign Up using</p>
                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round facebook"><i className="zmdi zmdi-facebook" /></button>
                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round twitter"><i className="zmdi zmdi-twitter" /></button>
                        <button className="btn btn-primary btn-icon btn-icon-mini btn-round google"><i className="zmdi zmdi-google-plus" /></button>
                        </div>
                    </div>
                    </form>
                    <div className="copyright text-center">
                    ©
                    ,
                    <span><a href="templatespoint.net">Templates Point</a></span>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="card">
                    <img src="assets/images/signin.svg" alt="Sign In" />
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Singin
