import React, { useState } from "react";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("signupUser"));

    if (!savedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (form.email === savedUser.email && form.password === savedUser.password) {
      alert("Sign in successful!");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
