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
function getRandomImage() {
    //funkcja generuje losowy url zdjęcia z rozdzielczością z zadanego zakresu
    // w postaci https://picsum.photos/640/480
    //zdefiniuj sobie minimalną szerokość zdjęcia
    const minWidth = 1900;
    //definiujemy maksymalną szerokość zdjęcia
    const maxWidth = 2500;
    //losujemy sobie wartość z zakresu <0;1>
    let random = Math.random();
    //wyliczamy losową szerokość według kryteriów
    let range = maxWidth - minWidth;
    //losowa liczba z zakresu 0-600 (maxWidth - minWidth)
    let randomFromRange = random * range;
    //zaokrąglamy do liczby całkowitej
    randomFromRange = Math.round(randomFromRange);
    //dodajemy minimum i zwracamy
    return randomFromRange + minWidth;
}

document.getElementById("bigPicture").addEventListener("click", showOverlay);
document.getElementById("fullScreenOverlay").addEventListener("click", hideOverlay);