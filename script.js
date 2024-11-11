// Liste mit Bild-URLs für jeden Tag
const images = [
    'images/day1.jpg',  // Bild für Türchen 1
    'images/day2.jpg',  // Bild für Türchen 2
    'images/day3.jpg',  // Bild für Türchen 3
    'images/day4.jpg',  // Bild für Türchen 4
    'images/day5.jpg',  // Bild für Türchen 5
    'images/day6.jpg',  // Bild für Türchen 6
    'images/day7.jpg',  // Bild für Türchen 7
    'images/day8.jpg',  // Bild für Türchen 8
    'images/day9.jpg',  // Bild für Türchen 9
    'images/day10.jpg', // Bild für Türchen 10
    'images/day11.jpg', // Bild für Türchen 11
    'images/day12.jpg', // Bild für Türchen 12
    'images/day13.jpg', // Bild für Türchen 13
    'images/day14.jpg', // Bild für Türchen 14
    'images/day15.jpg', // Bild für Türchen 15
    'images/day16.jpg', // Bild für Türchen 16
    'images/day17.jpg', // Bild für Türchen 17
    'images/day18.jpg', // Bild für Türchen 18
    'images/day19.jpg', // Bild für Türchen 19
    'images/day20.jpg', // Bild für Türchen 20
    'images/day21.jpg', // Bild für Türchen 21
    'images/day22.jpg', // Bild für Türchen 22
    'images/day23.jpg', // Bild für Türchen 23
    'images/day24.jpg'  // Bild für Türchen 24
];

// Funktion zum Öffnen des Türchens und Anzeigen des Bildes
function openDoor(day) {
    const imageModal = document.getElementById('image-modal');
    const doorImage = document.getElementById('door-image');

    // Setze das Bild für den gewählten Tag
    doorImage.src = images[day - 1];

    // Überprüfen, ob das Bild geladen werden kann und Fehlerbehandlung hinzufügen
    doorImage.onerror = function () {
        console.error('Bild nicht gefunden:', doorImage.src);
        alert('Bild für diesen Tag konnte nicht geladen werden.');
        closeModal(); // Schließt das Modal, falls das Bild nicht gefunden wird
    };

    // Zeige das Modal-Fenster an
    imageModal.style.display = 'flex';
}

// Funktion zum Schließen des Bildanzeige-Fensters
function closeModal() {
    const imageModal = document.getElementById('image-modal');
    imageModal.style.display = 'none';
}
