function initMap() {
    let lat = parseFloat(mapContainer.getAttribute('data-lat'));
    let lng = parseFloat(mapContainer.getAttribute('data-lng'));
    let input = document.querySelector('.quote1_button');
    let location = { lat: lat, lng: lng };
    let pathCoordinates = [];
    
    let map = new google.maps.Map(document.getElementById('mapContainer'), {
        center: location,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
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
        
        let coordinatesJSON = JSON.stringify(pathCoordinates);
        let coordinate = encodeURIComponent(coordinatesJSON);
        let url = input.getAttribute("data-url");
        window.location.href = `${url}?coordinates=${coordinate}`;
    });
}
document.addEventListener('DOMContentLoaded', initMap);