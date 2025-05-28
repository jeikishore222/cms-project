<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Main Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #f9f9f9;
    }
    h1 {
      color: #333;
    }
    .nav {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin-top: 20px;
    }
    .nav a {
      background-color: #0366d6;
      color: white;
      padding: 12px 16px;
      margin: 5px 0;
      text-decoration: none;
      border-radius: 5px;
      text-align: center;
    }
    .nav a:hover {
      background-color: #024ea2;
    }
  </style>
</head>
<body>
  <h1>Welcome to the Main Page</h1>
  <p>Select a page to visit:</p>

  <div class="nav">
    <a href="about.html">About Page</a>
    <a href="developer.html">Developer Page</a>
    <a href="signin.html">Sign In</a>
    <a href="signup.html">Sign Up</a>
    <a href="layout.html">Basic Layout</a>
    <a href="auth-context.html">Auth Context</a>
    <a href="dashboard.html">Dashboard</a>
    <a href="routes.html">App Routes</a>
  </div>
</body>
</html>
