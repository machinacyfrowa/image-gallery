function init() {
    //znajdź wszystkie obrazki na rolce miniatur
    let imageList = document.querySelectorAll("div#thumbnailRoll img");
    //dla każdego wygeneruj randomowy url
    for(let i = 0; i < imageList.length; i++) {
        imageList[i].src = getRandomImageUrl();
    }
    //ustaw główny obrazek na pierwszy obrazek z rolki miniatur
    document.querySelector("div#bigPicture img").src = imageList[0].src;

    //dodaj zdarzenie do obrazków na rolce
    let thumbnailList = document.querySelectorAll("div#thumbnailRoll img");
    for(let i = 0; i < thumbnailList.length; i++) {
        thumbnailList[i].addEventListener('click', thumbnailClick);
    }
}
function showOverlay() {
    //znajdz url zdjecia które znajduję się na środku (wewnątrz div#bigPicture)
    let url = document.querySelector("div#bigPicture img").src;
    //ustawiamy url zdjęcia pełnoekranowego na ten sam url
    document.querySelector("div#fullScreenOverlay img").src = url;
    //pokazuje zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "flex";
}
function hideOverlay() {
    //ukrywa zdjęcie na całym ekranie
    let overlay = document.getElementById("fullScreenOverlay");
    overlay.style.display = "none";
}
function getRandomFromRange(min, max) {
    let random = Math.random();
    //wyliczamy losowa szerokosc wedlug kryteriow
    let range = max - min;
    //losowa liczba z zakresu
    let randomFromRange = random * range;
    //zaokrąglij
    randomFromRange = Math.round(randomFromRange);
    //dodaj minimum żeby dostać finalną liczbę
    random = randomFromRange + min
    //zwróć finalną liczbę
    return random;
}
function getRandomImageUrl() {
    //funkcja generuje losowy url zdjęcia z rozdzielczością z zadanego zakresu
    // w postaci https://picsum.photos/640/480
    //zdefiniuj sobie minimalną szerokość zdjęcia
    const minWidth = 1900;
    //definiujemy maksymalną szerokość zdjęcia
    const maxWidth = 2500;
    //generujemy losową szerokość z zakresu
    let randomWidth = getRandomFromRange(minWidth, maxWidth);
    //to samo dla wysokości
    const minHeight = 900;
    const maxHeight = 1200;
    let randomHeight = getRandomFromRange(minHeight, maxHeight);
    //sklejamy sobie url
    let url = "https://picsum.photos/" + randomWidth + "/" + randomHeight;
    return url;
}
function thumbnailClick(event) {
    //pobierz url zdjęcia klikniętej miniatury korzystając z właściwości zdarzenia click
    let url = event.srcElement.src;
    document.querySelector("div#bigPicture img").src = url;
}
function getNextImageURL() {

}
//po załadowaniu html strony wywołaj funkcję init
window.addEventListener("load", init);
document.getElementById("bigPicture").addEventListener("click", showOverlay);
document.getElementById("fullScreenOverlay").addEventListener("click", hideOverlay);

    

