let totalDistance = parseFloat(house_detail_sec.getAttribute('data-distance'));
let selectedValue = parseFloat(house_detail_sec.getAttribute('data-value'));
let initialLat = parseFloat(house_detail_sec.getAttribute('data-initlat'));
let initialLng = parseFloat(house_detail_sec.getAttribute('data-initlng'));
let selectedMaterial = house_detail_sec.getAttribute('data-matname');
let input = document.querySelector('.quote1_button');
let area = (totalDistance / 4 ) * ( totalDistance / 4)
let result = totalDistance * selectedValue;
let quote5URL =  null;
let houseSizeElement = document.querySelector('.house_size');
let materialSizeElement = document.querySelector('.material_element h6:last-child');
let materialElement = document.querySelector('.material_element h6:first-child');
let priceElement = document.querySelector('.price_element h6:last-child');
let url = input.getAttribute('data-url');

if (houseSizeElement && materialSizeElement && priceElement) {
    houseSizeElement.textContent = 'Size of your house is ' + area.toFixed(2) + ' square ft';
    materialElement.textContent = selectedMaterial;
    materialSizeElement.textContent = area.toFixed(2) + ' sq ft';
    priceElement.textContent = '$' + result.toFixed(2);
}

quote5URL = `${url}?initialLat=${initialLat}&initialLng=${initialLng}&selectedMaterial=${selectedMaterial}&price=${result}`;
document.querySelector('.quote1_button').addEventListener('click', function() {
    window.location.href = quote5URL;
});