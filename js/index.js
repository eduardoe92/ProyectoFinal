var isImageOneVisible = true;

function toggleImages() {
    var firstImage = document.getElementById("primera-imagen");
    var secondImage = document.getElementById("segunda-imagen");

    if (isImageOneVisible) {
        firstImage.style.display = "none";
        secondImage.style.display = "block";
        isImageOneVisible = false;
    } else {
        firstImage.style.display = "block";
        secondImage.style.display = "none";
        isImageOneVisible = true;
    }
}

setInterval(toggleImages, 2000); // Alterna las imágenes cada 2 segundos
