import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const  Register = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name : "",
    email : "",
    password : "",
    reEnterPassword : "" 
  })

const handleChange = (event) => {
const {name,value} = event.target;
 setUser({
    ...user,
    [name] : value
 })
}

const register = () => {
  const { name,email,password ,reEnterPassword} = user 
  if(name && email && password && (password === reEnterPassword))  {
    
    axios.post("http://localhost:9002/register" , user) 
    .then(res => console.log(res));
  }

  else {
    alert('Galat hai ')
  }

}

return (
    <div className="register">
    
    <h1>Register</h1>
    <input type="text"  name = "name" value = {user.name} onChange={handleChange} placeholder="Your Name"></input>
    <input type="text"  name = "email" value = {user.email} onChange={handleChange} placeholder="Enter Your Mail"></input>
    <input type="password"  name = "password" value = {user.password} onChange={handleChange} placeholder="Your Password"></input>
   <input type="password" name = "reEnterPassword" value = {user.reEnterPassword} onChange={handleChange}  placeholder="Enter your password again"></input>
    <div className="button" onClick={register}>
        Register
    </div>
    <div>or</div>
    {/* <div className="button">Login</div> */}
    <div className="button" onClick={()=>navigate('/login')}>Login</div>
   </div>
)
}

export default Register;