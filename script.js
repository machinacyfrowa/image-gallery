function showOverlay() {
    //pokazuje zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "flex";
}
function hideOverlay() {
    //ukrywa zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "none";
}

document.getElementById("bigPicture").addEventListener("click", showOverlay);
document.getElementById("fullScreenOverlay").addEventListener("click", hideOverlay);