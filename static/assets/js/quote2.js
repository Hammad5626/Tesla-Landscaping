function initMap() {
    let lat = parseFloat('{{ request.GET.lat }}');
    let lng = parseFloat('{{ request.GET.lng }}');
    
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

        window.location.href = '{% url "quote3" %}?coordinates=' + encodeURIComponent(coordinatesJSON);
    });
}
document.addEventListener('DOMContentLoaded', initMap);