import React, { useState } from "react";
import UberLogo from "../utils/uber-logo.png";
import { Link } from "react-router-dom";

const UserSignUp = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('')
    const [userData , setUserData] = useState({});
    
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullName : {
          firstName : firstName,
          lastName : lastName,
        },
        email : email , 
        password : password
      })
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('')
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img className="w-16 mb-5" src={UberLogo} alt="Uber logo" />
            <form onSubmit={(e) => {
              submitHandler(e)
            }}>
              <h3 className="text-lg font-medium mb-2 ">What's your name</h3>
              <div className="flex gap-4">
              <input
                className="bg-[#eeeeee] rounded px-4 w-1/2 py-2 mb-7 border text-lg placeholder:text-base"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                placeholder="Enter the first name"
              />
              <input
                className="bg-[#eeeeee] rounded px-4 w-1/2 py-2 mb-7 border text-lg placeholder:text-base"
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Enter the last name"
              />
              </div>
              <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email"
                placeholder="Enter the email"
              />
              <h3 className="text-lg font-medium mb-2">Password</h3>
              <input
                className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter the password"
              />
              <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base">
                Sign up
              </button>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login here
              </Link>
            </p>
          </div>
    
          <div>
            <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy </span> 
             and <span className="underline">Terms of Service apply</span></p>
          </div>
        </div>
  )
}

export default UserSignUp
