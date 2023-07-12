document.addEventListener("DOMContentLoaded", function() {
    const headerImage = document.getElementById("header-image");
    fetch("https://lexica.art/prompt/17d23fba-1c71-4aaf-a0fe-5224d214f253")
        .then(response => response.blob())
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            headerImage.src = imageUrl;
        });
});
