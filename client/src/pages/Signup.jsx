import React, { useState } from "react";

function initialState() {
  return {
    username: "",
    password: "",
    email: "",
    department: "",
    state: "",
    country: "",
  };
}

const Signup = () => {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signupUser", JSON.stringify(form));
    setMessage("Signup successful! You can now sign in.");
    setForm(initialState);
  };

  return (
    <SignupForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      message={message}
    />
  );
};

function SignupForm({ form, handleChange, handleSubmit, message }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(form).map(([key, value]) => (
          <div key={key}>
            <label className="block mb-1 font-medium">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              name={key}
              type={key === "password" ? "password" : "text"}
              value={value}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mt-4 font-semibold"
        >
          Signup
        </button>
      </form>
      {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
    </div>
  );
}

export default Signup;