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

        const bounds = new google.maps.LatLngBounds();
        path.forEach(function (latlng) {
            bounds.extend(latlng);
        });
        const center = bounds.getCenter();
        const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=640x480&path=color:0xff0000ff|weight:5|enc:${google.maps.geometry.encoding.encodePath(path)}&center=${center.lat()},${center.lng()}&zoom=19&maptype=satellite&key=AIzaSyBmjBa0bBtZgyrt_kaNV_I9anxcPYYQY1s`;
        document.getElementById('map_imageInput').value = staticMapUrl;
    });
}
document.addEventListener('DOMContentLoaded', initMap);