function initMap() {
    let lat = parseFloat(mapContainer.getAttribute('data-lat'));
    let lng = parseFloat(mapContainer.getAttribute('data-lng'));
    let location = { lat: lat, lng: lng };
    let pathCoordinates = [];
    
    let map = new google.maps.Map(document.getElementById('mapContainer'), {
        center: location,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 0
    });

    let drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYLINE,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['polyline']
        }
    });
    drawingManager.setMap(map);
    
    google.maps.event.addListener(drawingManager, 'polylinecomplete', function(polyline) {
        let path = polyline.getPath();
        path.forEach(function(latlng) {
            pathCoordinates.push({ lat: latlng.lat(), lng: latlng.lng() });
        });
        document.getElementById('coordinatesInput').value = JSON.stringify(pathCoordinates);
        console.log(document.getElementById('coordinatesInput').value);
    });
}
document.addEventListener('DOMContentLoaded', initMap);