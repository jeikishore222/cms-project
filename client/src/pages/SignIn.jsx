import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const containerClass = "flex flex-col items-center justify-center min-h-screen bg-gray-100";
  const formClass = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80";
  const labelClass = "block text-gray-700 text-sm font-bold mb-2";
  const inputClass = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4";
  const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("signupUser"));
    if (!savedUser) {
      setMessage("No user found. Please sign up first.");
    } else if (
      form.email === savedUser.email &&
      form.password === savedUser.password
    ) {
      setMessage("Sign in successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000); 
    } else {
      setMessage("Invalid email or password.");
    }
    setForm({ email: "", password: "" });
  };

  return (
    <div className={containerClass}>
      <div className={formClass}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={labelClass}>Email:</label>
            <input
              className={inputClass}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Password:</label>
            <input
              className={inputClass}
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className={buttonClass} type="submit">
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/logout" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </div>
    </div>
  );
}