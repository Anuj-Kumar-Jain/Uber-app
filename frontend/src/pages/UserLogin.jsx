import React, { useState } from "react";
import UberLogo from "../utils/uber-logo.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData , setUserData] = useState({});
  
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email : email , 
      password : password
    })
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
          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
            required
            value = {email}
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
              setPassword(e.target.password)
            }}
            type="password"
            placeholder="Enter the password"
          />
          <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base">
            Sign in
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
