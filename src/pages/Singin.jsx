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
        <div className='container'>
            <form onSubmit={submitHandler}>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete='off'onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}

export default Singin
