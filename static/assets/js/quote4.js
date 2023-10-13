let totalDistance = parseFloat(house_detail_sec.getAttribute('data-distance'));
let selectedValue = parseFloat(house_detail_sec.getAttribute('data-value'));
let input = document.querySelector('.quote1_button');
let area = (totalDistance / 4 ) * ( totalDistance / 4)
let result = totalDistance * selectedValue;
let quote5URL =  null;

let houseSizeElement = document.querySelector('.house_size');
let materialSizeElement = document.querySelector('.material_size');
if (houseSizeElement) {
    houseSizeElement.textContent = 'Size of your house is ' + area.toFixed(2) + ' square ft';
}
if (materialSizeElement) {
    materialSizeElement.textContent = area.toFixed(2) + ' sq ft';
}

let priceElement = document.querySelector('.price_element h6:last-child');
if (priceElement) {
    priceElement.textContent = '$' + result.toFixed(2);
}
let url = input.getAttribute('data-url');
quote5URL = `${url}?price=${result}`;
document.querySelector('.quote1_button').addEventListener('click', function() {
    window.location.href = quote5URL;
});