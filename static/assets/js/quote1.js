document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('addressInput');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        let place = autocomplete.getPlace();
        if (!place.geometry) {
            console.log("No location details available for this place.");
            return;
        }
        let lat = place.geometry.location.lat();
        let lng = place.geometry.location.lng();
        let url = input.getAttribute('data-url');
        let newUrl = `${url}?lat=${lat}&lng=${lng}`;
        window.location.href = newUrl;
    });
});
