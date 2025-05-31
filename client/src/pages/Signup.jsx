
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function initialState() {
  return {

    email: "",
    password: "",
  };
}

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signupUser", JSON.stringify(form));

    setMessage("Sign up successful! Redirecting to sign in...");
    setForm(initialState);
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password:</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mt-4 font-semibold"
        >


          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </div>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};


export default SignUp;
