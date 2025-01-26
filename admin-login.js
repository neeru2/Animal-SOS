document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded admin credentials (in a real app, this would be more secure)
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});

// Check login status
function checkAdminLogin() {
    if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = 'admin-login.html';
    }
}