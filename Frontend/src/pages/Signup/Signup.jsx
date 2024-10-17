import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInputs from "../../components/Inputs/PasswordInput";
import { validateEmail } from "../../utils/helper";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({userInfo}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    if (!name) {
      setError("Please enter your name");
      return;
    }
  
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
  
    if (!password) {
      setError("Please enter the password");
      return;
    }
  
    setError("");
  
    // Sign up API call
    try {
      const res = await axios.post(
        "https://notekeeper-l0ak.onrender.com/api/auth/signup",
        { username: name, email, password },
        { withCredentials: true }
      );
  
      // Check if the response was successful
      if (!res.data || res.data.success === false) {
        const errorMessage = res.data?.message || "Signup failed. Please try again.";
        setError(errorMessage);
        toast.error(errorMessage);
        return;
      }
  
      // Show success toast and navigate to login
      toast.success(res.data.message);
      setError("");
      navigate("/login");
    } catch (error) {
      // Log detailed error and show appropriate message
      console.error("Signup error:", error.response || error.message || error);
      const errorMsg = error.response?.data?.message || "An unexpected error occurred. Please try again.";
      toast.error(errorMsg);
      setError(errorMsg);
    }
  };
  

  
  return (
    <>
      
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInputs
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              SIGN UP
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-medium text-[#2B85FF] underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
