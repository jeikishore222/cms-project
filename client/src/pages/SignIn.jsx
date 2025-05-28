import React, { useState } from "react";

export default  function SignIn() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        alert("Sign up is not available. Please sign in.");
        setForm({ email: "", password: "" });
    };
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
        <div>
            <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
            </form>
            <button onClick={toggleForm} style={{ marginTop: "10px" }}>
                {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
        </div>
    );
}

