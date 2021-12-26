import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/userSlice'

const Login = () => {
    const dispatch = useDispatch()
    return (
      <div>
        <button
          onClick={() => {
            dispatch(login({ name: "lasun", age: 30, email: "la@gmail.com" }));
          }}
        >
          Login
        </button>

        <button onClick={()=> {dispatch(logout())}}>Logout</button>
      </div>
    );
}

export default Login
