import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userAction';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConpassword] = useState('')
    const [message, setMessage] = useState('')
    const  navigate = useNavigate();


    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister)
    // const { loading, error, userInfo } = userRegister

    console.log(userRegister)
    const user = JSON.parse(localStorage.getItem('userInfo'))

    useEffect(() => {
        if (user){
            navigate('/', {replace: true});
        }
        // console.log(user)
    }, [ user])

    // const submitHandler=(e)=>{
    //     e.preventDefault()
    //     console.log(email, password)
    //     if(password !== conpassword){
    //         setMessage('Password do not match')
    //         console.log("Password Missmatch")

    //     }else{
    //         dispatch(register(name, email, password))
    //     }

    // }
    function submitHandler (e){
        e.preventDefault()
        console.log(email, password)
        if(password !== conpassword){
            setMessage('Password do not match')
            console.log("Password Missmatch")

        }else{
            dispatch(register(name, email, password))
            navigate("/");

        }
        console.log('Hello');
    }
    return (
        <>
            <div className="authentication">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-12">
                {message && <div>{message}</div>}
                    <form className="card auth_form">
                    <div className="header">
                        <img className="logo" src="assets/images/logo.svg"  />
                        <h5>Sign Up</h5>
                        <span>Register a new membership</span>
                    </div>
                    <div className="body">
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Enter Name"onChange={(e) => setName(e.target.value)}/>
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-account-circle" /></span>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Enter Email"  name="email"  onChange={(e) => setEmail(e.target.value)}/>
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-email" /></span>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-lock" /></span>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input type="password" className="form-control" name="conpassword" placeholder="Re-Password" onChange={(e) => setConpassword(e.target.value)} />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="zmdi zmdi-lock" /></span>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light"onClick={submitHandler}>SIGN IN</button>
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
                    <img src="assets/images/signup.svg"  />
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Singup
