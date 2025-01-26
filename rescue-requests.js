// Check admin login
function checkAdminLogin() {
    if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = 'admin-login.html';
    }
}
checkAdminLogin();

document.addEventListener('DOMContentLoaded', function() {
    const rescueRequestsList = document.getElementById('rescueRequestsList');
    
    // Get pending rescue requests
    const rescueRequests = JSON.parse(localStorage.getItem('rescueRequests')) || [];
    const pendingRequests = rescueRequests.filter(request => request.status === 'pending');

    if (pendingRequests.length === 0) {
        rescueRequestsList.innerHTML = '<p>No pending rescue requests.</p>';
        return;
    }

    pendingRequests.forEach(request => {
        const requestCard = document.createElement('div');
        requestCard.classList.add('animal-card');
        requestCard.innerHTML = `
            <img src="${request.photoURL}" alt="Animal Photo">
            <div class="animal-details">
                <p><strong>Location:</strong> ${request.location}</p>
                <p><strong>Description:</strong> ${request.description}</p>
                <button onclick="acceptRescue(${request.id})">Accept Rescue</button>
            </div>
        `;
        rescueRequestsList.appendChild(requestCard);
    });
});

function acceptRescue(requestId) {
    let rescueRequests = JSON.parse(localStorage.getItem('rescueRequests')) || [];
    
    const requestIndex = rescueRequests.findIndex(request => request.id === requestId);
    if (requestIndex !== -1) {
        rescueRequests[requestIndex].status = 'rescued';
        localStorage.setItem('rescueRequests', JSON.stringify(rescueRequests));
        alert('Rescue request accepted!');
        location.reload();
    }
}