
// Função para criar um card de produto
function createProductCard(product) {
    return `
        <div class="col-lg-4 col-md-6">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <i class="bi ${product.icon} product-icon"></i>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                <button class="btn add-to-cart-btn w-100" onclick="addToCart('${product.name}', ${product.price})">
                    <i class="bi bi-cart-plus"></i> Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `;
}

// Função para carregar produtos em uma seção
function loadProducts(categoryId, products) {
    const container = document.getElementById(`${categoryId}-container`);
    if (container) {
        container.innerHTML = products.map(product => createProductCard(product)).join('');
    }
}

// Carregar todos os produtos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('salgados', products.salgados);
    loadProducts('doces', products.doces);
    loadProducts('bebidas', products.bebidas);
});
