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
}


function SignupForm({ form, handleChange, handleSubmit, message }) {
    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Username:</label>
                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        autoComplete="username"
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
                    <label className="block mb-1 font-medium">Department:</label>
                    <input
                        name="department"
                        value={form.department}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">State:</label>
                    <input
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Country:</label>
                    <input
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>
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