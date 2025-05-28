import React from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    color: "#333",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    marginTop: "20px",
  },
  link: {
    backgroundColor: "#0366d6",
    color: "white",
    padding: "12px 16px",
    margin: "5px 0",
    textDecoration: "none",
    borderRadius: "5px",
    textAlign: "center",
    transition: "background 0.2s",
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
    <h1 style={styles.heading}>Welcome to the Main Page</h1>
    <p>Select a page to visit:</p>
    <div style={styles.nav}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={styles.link}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = "#024ea2")}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = "#0366d6")}
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default Home;