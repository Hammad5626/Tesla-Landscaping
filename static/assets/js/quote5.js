var totalPrice = parseFloat('{{ request.GET.price }}');

var priceElement = document.querySelector('.order_summary_cash h6:last-child');
if (priceElement) {
    priceElement.textContent = '$' + totalPrice.toFixed(2);
}