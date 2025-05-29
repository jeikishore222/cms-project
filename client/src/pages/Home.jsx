import React from "react";
import { Link } from "react-router-dom";


const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9eff5",
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    color: "#222",
    fontSize: "28px",
    marginBottom: "10px",
  },
  subheading: {
    color: "#555",
    fontSize: "16px",
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    backgroundColor: "#0366d6",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "background 0.3s, transform 0.2s",
  },
};

const navLinks = [
  { href: "/about", label: "About Page" },
  { href: "/developer", label: "Developer Page" },
  { href: "/signin", label: "Sign In" },
  { href: "/signup", label: "Sign Up" },
  { href: "/layout", label: "Basic Layout" },
  { href: "/auth-context", label: "Auth Context" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/routes", label: "App Routes" },
];

const Home = () => (
  <div style={styles.container}>
    <div style={styles.card}>
      <h1 style={styles.heading}>Welcome to the Main Page</h1>
      <p style={styles.subheading}>Select a page to visit:</p>
      <div style={styles.nav}>
        {navLinks.map((link) => (
         <Link
  key={link.href}
  to={link.href}
  style={styles.link}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#024ea2";
    e.currentTarget.style.transform = "scale(1.03)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#0366d6";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  {link.label}
</Link>

        ))}
      </div>
    </div>
  </div>
);

export default Home;
