const materialCards = document.querySelectorAll('.choose_material_card');
let coordinatesJSON = decodeURIComponent(data_fetch.getAttribute('data-component'));
let coordinates = JSON.parse(coordinatesJSON);
let selectedCard = null;
let selectedValue = null;
let selectedTitle = null;
let firstLat = coordinates[0].lat;
let firstLng = coordinates[0].lng;
let house_location = { lat: firstLat, lng: firstLng };
let placeName = null;

let geocoder = new google.maps.Geocoder();
geocoder.geocode({ location: house_location }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
            placeName = results[0].formatted_address;
            console.log("Inside Place Name:------->>>");
            console.log(placeName);
        }
    }
});
materialCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        if (selectedCard) {
            selectedCard.classList.remove('selected');
        }        
        card.classList.add('selected');
        selectedCard = card;
        selectedValue = parseFloat(card.getAttribute('data-value'));
        selectedTitle = card.getAttribute('data-name');
    });
});

document.querySelector('.quote1_button').addEventListener('click', function() {
    if (selectedCard !== null) {
        document.getElementById('selectedValueInput').value = selectedValue;
        document.getElementById('initialLatInput').value = firstLat;
        document.getElementById('initialLngInput').value = firstLng;
        document.getElementById('selectedTitleInput').value = selectedTitle;
        document.getElementById('addressInput').value = placeName;
        document.querySelector('form').submit();
    } else {
        alert('Please select a material before getting a quote.');
}
});