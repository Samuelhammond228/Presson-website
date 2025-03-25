// Sample product data
const products = [
    {
        id: 1,
        name: "Paracetamol",
        price: 5.99,
        image: "paracetamol.jpg",
        description: "Pain relief medication"
    },
    {
        id: 2,
        name: "Amoxicillin",
        price: 12.99,
        image: "amoxicillin.jpg",
        description: "Antibiotic medication"
    },
    {
        id: 3,
        name: "Ibuprofen",
        price: 7.99,
        image: "ibuprofen.jpg", 
        description: "Anti-inflammatory medication"
    },
    {
        id: 4,
        name: "Vitamin C",
        price: 9.99,
        image: "vitamin-c.jpg",
        description: "Immune system support supplement"
    },
    {
        id: 5,
        name: "Omeprazole",
        price: 15.99,
        image: "omeprazole.jpg",
        description: "Acid reflux medication"
    },
    {
        id: 6,
        name: "Cetirizine",
        price: 8.99,
        image: "cetirizine.jpg",
        description: "Allergy relief antihistamine"
    },
    {
        id: 7,
        name: "Metformin",
        price: 11.99,
        image: "metformin.jpg",
        description: "Diabetes medication"
    }
    // Add more products as needed
];

// Display products
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₵${product.price.toFixed(2)}</p>
            <button onclick="openPaymentModal(${product.price})">Buy Now</button>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Payment Modal Functions
const modal = document.getElementById('paymentModal');
const closeBtn = document.getElementsByClassName('close')[0];
const paymentForm = document.getElementById('paymentForm');

function openPaymentModal(price) {
    modal.style.display = "block";
    document.getElementById('amount').value = price.toFixed(2);
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

paymentForm.onsubmit = function(e) {
    e.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;
    
    // Here you would integrate with the MTN Mobile Money API
    alert(`Processing payment of ₵${amount} from ${phoneNumber}`);
    modal.style.display = "none";
}

// Load products when the page loads
if (document.getElementById('productsGrid')) {
    displayProducts();
} 