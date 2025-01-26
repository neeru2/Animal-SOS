document.getElementById('rescueForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const location = document.getElementById('animalLocation').value;
    const photoFile = document.getElementById('animalPhoto').files[0];
    const description = document.getElementById('animalDescription').value;

    // Read file as base64
    const reader = new FileReader();
    reader.onloadend = function() {
        // Create rescue request object
        const rescueRequest = {
            id: Date.now(),
            location,
            description,
            photoURL: reader.result,
            status: 'pending'
        };

        // Get existing requests or create new array
        let rescueRequests = JSON.parse(localStorage.getItem('rescueRequests')) || [];
        rescueRequests.push(rescueRequest);
        
        // Save to local storage
        localStorage.setItem('rescueRequests', JSON.stringify(rescueRequests));

        alert('Rescue request submitted successfully!');
        window.location.href = 'index.html';
    };

    reader.readAsDataURL(photoFile);
});