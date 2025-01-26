<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Admin Login</h1>
        <form id="adminLoginForm" action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <a href="index.html" class="btn back-btn">Back to Home</a>
    </div>
    <script src="admin-login.js"></script>
</body>
</html>