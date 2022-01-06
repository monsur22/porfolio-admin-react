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
        <div className='container'>
            <form onSubmit={submitHandler}>
            {message && <div>{message}</div>}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="name"aria-describedby="emailHelp" placeholder="Enter Name"onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control " id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email"onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control " id="exampleInputPassword1"name="password" placeholder="Password"onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control " id="exampleInputPassword1"name="conpassword" placeholder="Re-Password"onChange={(e) => setConpassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Singup
