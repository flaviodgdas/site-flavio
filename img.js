const images = [
    "telas.png", // Substitua pelos caminhos reais das imagens
    "telas1.png",
    "telas.png"
];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById("image");
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

// Troca a imagem a cada 1 minuto (60.000ms)
setInterval(changeImage, 60000);