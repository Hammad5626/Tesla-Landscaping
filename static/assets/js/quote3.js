const materialCards = document.querySelectorAll('.choose_material_card');
let coordinatesJSON = decodeURIComponent(data_fetch.getAttribute('data-component'));
let input = document.querySelector('.quote1_button');
let coordinates = JSON.parse(coordinatesJSON);
let selectedCard = null;
let selectedValue = null;
let quote4URL = null;
let totalDistance = 0;
console.log(coordinatesJSON);
function calculateDistance(lat1, lon1, lat2, lon2) {
    let R = 6371;
    let dLat = deg2rad(lat2 - lat1);
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;
    return distance;
}
        
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

for (let i = 0; i < coordinates.length - 1; i++) {
    let lat1 = coordinates[i].lat;
    let lon1 = coordinates[i].lng;
    let lat2 = coordinates[i + 1].lat;
    let lon2 = coordinates[i + 1].lng;
    totalDistance += calculateDistance(lat1, lon1, lat2, lon2);
}
totalDistance = totalDistance * 3280.84;

materialCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        if (selectedCard) {
            selectedCard.classList.remove('selected');
        }        
        card.classList.add('selected');
        selectedCard = card;
        selectedValue = parseFloat(card.getAttribute('data-value'));
        let url = input.getAttribute("data-url");
        quote4URL = `${url}?total_distance=${totalDistance}&selected_value=${selectedValue}`;
    });
});

document.querySelector('.quote1_button').addEventListener('click', function() {
    if (selectedCard !== null) {
        window.location.href = quote4URL;
    } else {
        alert('Please select a material before getting a quote.');
}
});