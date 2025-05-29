import React, { useState } from "react";

export default  function SignIn() {
    const [form, setForm] = useState({ email: "", password: "" });
    
    const containerClass = "flex flex-col items-center justify-center min-h-screen bg-gray-100";
    const formClass = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80";
    const labelClass = "block text-gray-700 text-sm font-bold mb-2";
    const inputClass = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4";
    const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full";
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const [isSignIn, setIsSignIn] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSignIn) {
            localStorage.setItem("userEmail", form.email);
            localStorage.setItem("userPassword", form.password);
            alert("Sign up successful! Please sign in.");
            setIsSignIn(true);
            setForm({ email: "", password: "" });
            return;
        } else {
            
            const savedEmail = localStorage.getItem("userEmail");
            const savedPassword = localStorage.getItem("userPassword");
            if (form.email === savedEmail && form.password === savedPassword) {
            alert("Sign in successful!");
            } else {
            alert("Invalid email or password.");
            }
        }
        
        console.log("Sign in with", form);
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
                    <button className={buttonClass} type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

