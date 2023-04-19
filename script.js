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
function getUrlList() {
    //pobierz wszystkie miniatury
    let imageList = document.querySelectorAll("div#thumbnailRoll img");
    //stwórz tablicę adresów url zdjęć
    let urlList = [];
    for(let i = 0; i < imageList.length; i++){
        //wepchnij do tablicy url adres kolejnego zdjęcia z listy zdjęć
        urlList.push(imageList[i].src);
    }
    return urlList;
}
function getNextImageURL() {
    //pobierz url obecnego dużego obrazka
    let currentImageUrl = document.querySelector("div#bigPicture img").src;
    urlList = getUrlList();
    //wyszukaj obecne zdjęcie w tablicy i znajdź jego index (kolejność)
    let currentIndex = urlList.indexOf(currentImageUrl);
    if(currentIndex == urlList.length - 1) {
        //obecny obrazek jest ostatnim na liście - zwróć pierwszy
        return urlList[0];
    } else {
        return urlList[currentIndex+1];
    }
}
function getPrevImageURL() {
    //pobierz url obecnego dużego obrazka
    let currentImageUrl = document.querySelector("div#bigPicture img").src;
    urlList = getUrlList();
    //wyszukaj obecne zdjęcie w tablicy i znajdź jego index (kolejność)
    let currentIndex = urlList.indexOf(currentImageUrl);
    if(currentIndex == 0) {
        //pierwszy na liście - zwróć ostatni
        return urlList[urlList.length - 1];
    } else {
        return urlList[currentIndex-1];
    }
}
function nextImage() {
    let nextImageUrl = getNextImageURL();
    document.querySelector("div#bigPicture img").src = nextImageUrl;
}
function prevImage() {
    let prevImageUrl = getPrevImageURL();
    document.querySelector("div#bigPicture img").src = prevImageUrl;
}
function moveRollRight() {

    //pobierz obecne przesunięcie razem z "px"
    let currentLeft = document.querySelector("div#movingRoll").style.left;

    //wyciągnij samą wartość liczbową
    currentLeft = parseInt(currentLeft)
    //odejmij 100
    currentLeft -= 100;
    //dodaj px
    currentLeft += "px"

    document.querySelector("div#movingRoll").style.left = currentLeft;
}
function moveRollLeft() {
    //pobierz obecne przesunięcie razem z "px"
    let currentLeft = document.querySelector("div#movingRoll").style.left;

    //wyciągnij samą wartość liczbową
    currentLeft = parseInt(currentLeft)
    //dodaj 100
    currentLeft += 100;
    //dodaj px
    currentLeft += "px"

    document.querySelector("div#movingRoll").style.left = currentLeft;
}
//po załadowaniu html strony wywołaj funkcję init
window.addEventListener("load", init);
document.getElementById("bigPicture").addEventListener("click", showOverlay);
document.getElementById("fullScreenOverlay").addEventListener("click", hideOverlay);
document.querySelector("div#bigPictureContainer div#rightArrow").addEventListener("click", nextImage);
document.querySelector("div#bigPictureContainer div#leftArrow").addEventListener("click", prevImage);
document.querySelector("div#rightThumbnailArrow").addEventListener("click", moveRollRight);
document.querySelector("div#leftThumbnailArrow").addEventListener("click", moveRollLeft);
    

