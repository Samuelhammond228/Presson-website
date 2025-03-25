// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navigation
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item" data-index="${index}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">₵${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                <button class="remove-item" onclick="removeItem(${index})">×</button>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

// Update item quantity
function updateQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 5.00 : 0;
    const total = subtotal + deliveryFee;

    const summaryHTML = `
        <div class="summary-item">
            <span>Subtotal</span>
            <span>₵${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-item">
            <span>Delivery Fee</span>
            <span>₵${deliveryFee.toFixed(2)}</span>
        </div>
        <div class="summary-item total">
            <span>Total</span>
            <span>₵${total.toFixed(2)}</span>
        </div>
        <button class="checkout-button" onclick="proceedToCheckout()">Proceed to Checkout</button>
    `;

    const cartSummary = document.querySelector('.cart-summary');
    if (cartSummary) {
        cartSummary.innerHTML = summaryHTML;
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    // Here you would typically redirect to a checkout page
    alert('Proceeding to checkout...');
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();
}); 