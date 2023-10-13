
let totalPrice = parseFloat(solar_size_section.getAttribute('data-price'));
let priceElement = document.querySelector('.order_summary_cash h6:last-child');
if (priceElement) {
    priceElement.textContent = '$' + totalPrice.toFixed(2);
}