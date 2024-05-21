document.addEventListener('DOMContentLoaded', (event) => {
    const uploadImageInput = document.getElementById('uploadImageInput');
    const uploadedImage = document.getElementById('uploadedImage');
    const generatedImage = document.getElementById('generatedImage');

    uploadImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
            generatedImage.style.display = 'none';
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});

function generateAIImage() {
    // Questo è un esempio concettuale di chiamata API. Dovrebbe essere sostituito con una vera chiamata API.
    const generatedImageUrl = 'https://api.example.com/generate-image'; // URL dell'API di generazione immagine

    fetch(generatedImageUrl)
        .then(response => response.json())
        .then(data => {
            const generatedImage = document.getElementById('generatedImage');
            generatedImage.src = data.imageUrl;
            generatedImage.style.display = 'block';
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.style.display = 'none';
        })
        .catch(error => console.error('Errore nella generazione dell\'immagine:', error));
}

