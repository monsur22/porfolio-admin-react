import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/userAction';
import { useNavigate, Navigate } from 'react-router-dom';

const Singup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConpassword] = useState('')
    const [message, setMessage] = useState('')
    const  navigate = useNavigate();


    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    console.log(userRegister)
    const user = JSON.parse(localStorage.getItem('userInfo'))

    useEffect(() => {
        if (user){
            navigate('/', {replace: true});
        }
        // console.log(user)
    }, [ user])

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(email, password)
        if(password !== conpassword){
            setMessage('Password do not match')
            console.log("Password Missmatch")

        }else{
            dispatch(register(name, email, password))
        }

    }
    return (
        // <div className='container'>
        //     <form onSubmit={submitHandler}>
        //     {message && <div>{message}</div>}
        //         <div className="form-group">
        //             <label htmlFor="exampleInputEmail1">Name</label>
        //             <input type="text" className="form-control" id="exampleInputEmail1" name="name"aria-describedby="emailHelp" placeholder="Enter Name"onChange={(e) => setName(e.target.value)} />
        //         </div>
        //         <div className="form-group mt-3">
        //             <label htmlFor="exampleInputEmail1">Email address</label>
        //             <input type="email" className="form-control " id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email"onChange={(e) => setEmail(e.target.value)} />
        //         </div>
        //         <div className="form-group mt-3">
        //             <label htmlFor="exampleInputPassword1">Password</label>
        //             <input type="password" className="form-control " id="exampleInputPassword1"name="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)} />
        //         </div>
        //         <div className="form-group mt-3">
        //             <label htmlFor="exampleInputPassword1">Password</label>
        //             <input type="password" className="form-control " id="exampleInputPassword1"name="conpassword" placeholder="Re-Password"onChange={(e) => setConpassword(e.target.value)} />
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
                        <h5>Sign Up</h5>
                        <span>Register a new membership</span>
                    </div>
                    <div className="body">
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-account-circle" /></span>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Email" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-email" /></span>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-lock" /></span>
                        </div>
                        </div>
                        <div className="checkbox">
                        <input id="remember_me" type="checkbox" />
                        <label htmlFor="remember_me">I read and agree to the <a href="javascript:void(0);">terms of usage</a></label>
                        </div>
                        <a href="index.html" className="btn btn-primary btn-block waves-effect waves-light">SIGN UP</a>
                        <div className="signin_with mt-3">
                        <a className="link" href="sign-in.html">You already have a membership?</a>
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
                    <img src="assets/images/signup.svg" alt="Sign Up" />
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Singup
