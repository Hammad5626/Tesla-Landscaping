let totalDistance = parseFloat('{{ request.GET.total_distance }}');
let selectedValue = parseFloat('{{ request.GET.selected_value }}');
let area = (totalDistance / 4 ) * ( totalDistance / 4)
let result = totalDistance * selectedValue;
let quote5URL =  null;

let houseSizeElement = document.querySelector('.house_size');
if (houseSizeElement) {
    houseSizeElement.textContent = 'Size of your house is ' + area.toFixed(2) + ' square ft';
}

let priceElement = document.querySelector('.solar_price h6:last-child');
if (priceElement) {
    priceElement.textContent = '$' + result.toFixed(2);
}
quote5URL = '{% url "quote5" %}?price=' + result;
document.querySelector('.quote1_button').addEventListener('click', function() {
    window.location.href = quote5URL;
});