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

document.getElementById("bigPicture").addEventListener("click", showOverlay);
document.getElementById("fullScreenOverlay").addEventListener("click", hideOverlay);
//wygeneruj listę wszystkich obrazków na stronie
let imageList = document.getElementsByTagName("img");
//przejdź przez listę pętlą
for(let i = 0; i < imageList.length; i++) {
    //zmień url obrazka na wygenerowany losowo
    imageList[i].src = getRandomImageUrl();
}
    
