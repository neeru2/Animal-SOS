// Check admin login
function checkAdminLogin() {
    if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = 'admin-login.html';
    }
}
checkAdminLogin();

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.href = 'index.html';
});