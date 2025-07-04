
// Carrinho de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Adicionar produto ao carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification();
}

// Salvar carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Atualizar contador do carrinho
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Mostrar notificação
function showNotification() {
    const notification = document.getElementById('cart-notification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Inicializar contador do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
