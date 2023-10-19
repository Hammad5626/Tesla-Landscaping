function initMap () {
    let input = document.getElementById('addressInput');
    let latInput = document.getElementById('latInput');
    let lngInput = document.getElementById('lngInput');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        let place = autocomplete.getPlace();
        if (!place.geometry) {
            console.log("No location details available for this place.");
            return;
        }
        let lat = place.geometry.location.lat();
        let lng = place.geometry.location.lng();
        latInput.value = lat;
        lngInput.value = lng;
    });
};
document.addEventListener('DOMContentLoaded', initMap);