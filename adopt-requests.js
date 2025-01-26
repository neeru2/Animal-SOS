// Check admin login
function checkAdminLogin() {
    if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = 'admin-login.html';
    }
}
checkAdminLogin();

document.addEventListener('DOMContentLoaded', function() {
    const adoptRequestsList = document.getElementById('adoptRequestsList');
    
    // Get rescued animals
    const rescueRequests = JSON.parse(localStorage.getItem('rescueRequests')) || [];
    const rescuedAnimals = rescueRequests.filter(animal => animal.status === 'rescued');

    if (rescuedAnimals.length === 0) {
        adoptRequestsList.innerHTML = '<p>No animals ready for treatment.</p>';
        return;
    }

    rescuedAnimals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');
        animalCard.innerHTML = `
            <img src="${animal.photoURL}" alt="Animal Photo">
            <div class="animal-details">
                <p><strong>Location:</strong> ${animal.location}</p>
                <p><strong>Description:</strong> ${animal.description}</p>
                <button onclick="markAsTreated(${animal.id})">Mark as Treated</button>
            </div>
        `;
        adoptRequestsList.appendChild(animalCard);
    });
});

function markAsTreated(animalId) {
    let rescueRequests = JSON.parse(localStorage.getItem('rescueRequests')) || [];
    
    const animalIndex = rescueRequests.findIndex(animal => animal.id === animalId);
    if (animalIndex !== -1) {
        rescueRequests[animalIndex].status = 'treated';
        localStorage.setItem('rescueRequests', JSON.stringify(rescueRequests));
        alert('Animal marked as treated!');
        location.reload();
    }
}