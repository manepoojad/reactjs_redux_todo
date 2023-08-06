import './login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginAction } from '../../redux/thunk/authThunk';

function LogIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  const handleUserNameChange = (e) => {
    const { value, type, name } = e.target
    setUserName(value)
  }
  // console.log(userName)

  const handlePasswordChange = (e) => {
    const { value, type, name } = e.target
    setPassword(value)
  }
  // console.log(password)

  const handleSubmit = async () => {
    try {
      const requestLoginPayload = {
        email: userName,
        password: password
      }
      const responseData = await dispatch(userLoginAction(requestLoginPayload)).unwrap()
      const stringifyData = JSON.stringify(responseData)
      localStorage.setItem("loginData", stringifyData)

      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }

  const handleCancelLogin = () => {
    setUserName("")
    setPassword("")

  }

  return (
    <div className='loginFormWrapper'>
      <form>
        <label><b>Username</b></label>
        <input
          type="text"
          name='userName'
          placeholder="Enter Username"
          value={userName}
          onChange={e => handleUserNameChange(e)}
        />
        <br />
        <label><b>Password</b></label>
        <input
          type="password"
          name='password'
          placeholder="Enter Password"
          value={password}
          onChange={e => handlePasswordChange(e)}
        />
        <br />
        <div>
          <button type="button" onClick={() => handleSubmit()}>LogIn</button>
        </div>
        <div className="container">
          <button type="button" className="cancelbtn" onClick={() => handleCancelLogin()}>Cancel</button>
          <a href="#">Forgot password?</a>
        </div>

      </form>
    </div>
  )
}

export default LogIn