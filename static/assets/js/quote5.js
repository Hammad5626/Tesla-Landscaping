
let totalPrice = parseFloat(solar_size_section.getAttribute('data-price'));
let area = parseFloat(solar_size_section.getAttribute('data-area'));
let priceElement = document.querySelector('.order_summary_cash h6:last-child');
let materialElement = document.querySelector('.material_summary h6:last-child');
if (priceElement && materialElement) {
    priceElement.textContent = '$' + totalPrice.toFixed(2);
    materialElement.textContent = area.toFixed(2) + ' sq ft';
}