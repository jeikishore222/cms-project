import React from "react";
import { Link } from "react-router-dom";

const backgroundImage =
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80"; // Replace with a better one if needed

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  topLeft: {
    position: "absolute",
    top: "20px",
    left: "30px",
    zIndex: 2,
    fontSize: "20px",
    fontWeight: "700",
    color: "#fff",
  },
  topRightNav: {
    position: "absolute",
    top: "20px",
    right: "30px",
    zIndex: 2,
    display: "flex",
    gap: "15px",
  },
  topLink: {
    backgroundColor: "#ffffffdd",
    color: "#333",
    padding: "10px 18px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  topLinkHover: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    transform: "translateY(-2px)",
  },
  centerContent: {
    position: "relative",
    zIndex: 2,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
  },
  quote: {
    fontSize: "28px",
    maxWidth: "700px",
    lineHeight: "1.4",
    color: "#fff",
    fontStyle: "italic",
    textShadow: "0 2px 10px rgba(0,0,0,0.6)",
  },
};

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      {/* Top-left brand */}
      <div style={styles.topLeft}>Welcome to AJD foods</div>

      {/* Top-right navigation */}
      <div style={styles.topRightNav}>
        <Link to="/develop" style={styles.topLink} onClick={handleClick}>
          Developer Page
        </Link>
        <Link to="/login" style={styles.topLink} onClick={handleClick}>
          Sign In
        </Link>
        <Link to="/logout" style={styles.topLink} onClick={handleClick}>
          Sign Up
        </Link>
      </div>

      {/* Center quote */}
      <div style={styles.centerContent}>
        <div style={styles.quote}>
          “One cannot think well, love well, sleep well, if one has not dined well.”
        </div>
      </div>
    </div>
  );
};

export default Home;
