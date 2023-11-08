let area = parseFloat(house_detail_sec.getAttribute('data-distance'));
area = area * 10.7639;
let selectedValue = parseFloat(house_detail_sec.getAttribute('data-value'));
let initialLat = parseFloat(house_detail_sec.getAttribute('data-initlat'));
let initialLng = parseFloat(house_detail_sec.getAttribute('data-initlng'));
let selectedMaterial = house_detail_sec.getAttribute('data-matname');

let result = area * selectedValue;

let houseSizeElement = document.querySelector('.house_size');
let materialSizeElement = document.querySelector('.material_element h6:last-child');
let materialElement = document.querySelector('.material_element h6:first-child');
let priceElement = document.querySelector('.price_element h6:last-child');

if (houseSizeElement && materialSizeElement && priceElement) {
    houseSizeElement.textContent = 'Project Size ' + area.toFixed(2) + ' sq ft';
    materialElement.textContent = selectedMaterial;
    materialSizeElement.textContent = area.toFixed(2) + ' sq ft';
    priceElement.textContent = '$' + result.toFixed(2);
}

document.querySelector('input[name="initialLat"]').value = initialLat;
document.querySelector('input[name="initialLng"]').value = initialLng;
document.querySelector('input[name="selectedMaterial"]').value = selectedMaterial;
document.querySelector('input[name="area"]').value = area;
document.querySelector('input[name="price"]').value = result;