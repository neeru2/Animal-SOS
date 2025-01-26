document.addEventListener('DOMContentLoaded', function() {
    const adoptionList = document.getElementById('adoptionList');
    
    // Get treated animals from local storage
    const rescueRequests = JSON.parse(localStorage.getItem('rescueRequests')) || [];
    const treatedAnimals = rescueRequests.filter(animal => animal.status === 'treated');

    if (treatedAnimals.length === 0) {
        adoptionList.innerHTML = '<p>No animals available for adoption.</p>';
        return;
    }

    treatedAnimals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');
        animalCard.innerHTML = `
            <img src="${animal.photoURL}" alt="Animal Photo">
            <div class="animal-details">
                <p><strong>Location:</strong> ${animal.location}</p>
                <p><strong>Description:</strong> ${animal.description}</p>
                <button onclick="adoptAnimal(${animal.id})">Adopt</button>
            </div>
        `;
        adoptionList.appendChild(animalCard);
    });
});

function adoptAnimal(animalId) {
    let rescueRequests = JSON.parse(localStorage.getItem('rescueRequests')) || [];
    
    const animalIndex = rescueRequests.findIndex(animal => animal.id === animalId);
    if (animalIndex !== -1) {
        rescueRequests[animalIndex].status = 'adopted';
        localStorage.setItem('rescueRequests', JSON.stringify(rescueRequests));
        alert('Animal adopted successfully!');
        location.reload();
    }
}