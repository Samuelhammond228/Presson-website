// Product data
const products = [
    {
        id: 1,
        name: "Pain Relief Tablets",
        price: 9.99,
        image: "images/products/pain-relief.jpg",
        description: "Fast-acting pain relief tablets for headaches and body aches."
    },
    {
        id: 2,
        name: "Vitamin C Supplements",
        price: 14.99,
        image: "images/products/vitamin-c.jpg",
        description: "High-strength vitamin C supplements to boost your immune system."
    },
    {
        id: 3,
        name: "First Aid Kit",
        price: 24.99,
        image: "images/products/first-aid.jpg",
        description: "Complete first aid kit for home and travel use."
    },
    {
        id: 4,
        name: "Antibacterial Hand Sanitizer",
        price: 4.99,
        image: "images/products/sanitizer.jpg",
        description: "Alcohol-based hand sanitizer for effective germ protection."
    },
    {
        id: 5,
        name: "Blood Pressure Monitor",
        price: 49.99,
        image: "images/products/bp-monitor.jpg",
        description: "Digital blood pressure monitor for home use."
    },
    {
        id: 6,
        name: "Diabetes Test Strips",
        price: 19.99,
        image: "images/products/test-strips.jpg",
        description: "Accurate blood glucose test strips for diabetes monitoring."
    },
    {
        id: 7,
        name: "Antihistamine Tablets",
        price: 7.99,
        image: "images/products/antihistamine.jpg",
        description: "Relief from allergies and hay fever symptoms."
    },
    {
        id: 8,
        name: "Thermometer",
        price: 12.99,
        image: "images/products/thermometer.jpg",
        description: "Digital thermometer for accurate temperature readings."
    },
    {
        id: 9,
        name: "Joint Pain Cream",
        price: 15.99,
        image: "images/products/pain-cream.jpg",
        description: "Topical cream for joint and muscle pain relief."
    },
    {
        id: 10,
        name: "Sleep Aid Tablets",
        price: 11.99,
        image: "images/products/sleep-aid.jpg",
        description: "Natural sleep aid for better rest and relaxation."
    },
    {
        id: 11,
        name: "Eye Drops",
        price: 6.99,
        image: "images/products/eye-drops.jpg",
        description: "Relief for dry and irritated eyes."
    },
    {
        id: 12,
        name: "Antacid Tablets",
        price: 5.99,
        image: "images/products/antacid.jpg",
        description: "Fast relief from heartburn and acid indigestion."
    },
    {
        id: 13,
        name: "Bandages",
        price: 3.99,
        image: "images/products/bandages.jpg",
        description: "Assorted sizes of adhesive bandages for wound care."
    },
    {
        id: 14,
        name: "Cough Syrup",
        price: 8.99,
        image: "images/products/cough-syrup.jpg",
        description: "Relief from cough and cold symptoms."
    },
    {
        id: 15,
        name: "Vitamin D Supplements",
        price: 12.99,
        image: "images/products/vitamin-d.jpg",
        description: "High-strength vitamin D for bone health."
    },
    {
        id: 16,
        name: "Face Masks",
        price: 4.99,
        image: "images/products/face-masks.jpg",
        description: "Box of 50 disposable face masks."
    },
    {
        id: 17,
        name: "Hand Cream",
        price: 7.99,
        image: "images/products/hand-cream.jpg",
        description: "Moisturizing hand cream for dry skin."
    },
    {
        id: 18,
        name: "Blood Sugar Monitor",
        price: 39.99,
        image: "images/products/sugar-monitor.jpg",
        description: "Digital blood sugar monitoring device."
    },
    {
        id: 19,
        name: "Antiseptic Solution",
        price: 5.99,
        image: "images/products/antiseptic.jpg",
        description: "Antiseptic solution for wound cleaning."
    },
    {
        id: 20,
        name: "Multivitamin Tablets",
        price: 16.99,
        image: "images/products/multivitamin.jpg",
        description: "Complete multivitamin supplement for daily use."
    },
    {
        id: 21,
        name: "Nasal Spray",
        price: 6.99,
        image: "images/products/nasal-spray.jpg",
        description: "Relief from nasal congestion and allergies."
    },
    {
        id: 22,
        name: "Pain Relief Gel",
        price: 9.99,
        image: "images/products/pain-gel.jpg",
        description: "Topical gel for muscle and joint pain."
    },
    {
        id: 23,
        name: "Stomach Relief Tablets",
        price: 7.99,
        image: "images/products/stomach-relief.jpg",
        description: "Relief from stomach pain and cramps."
    },
    {
        id: 24,
        name: "First Aid Scissors",
        price: 4.99,
        image: "images/products/scissors.jpg",
        description: "Medical scissors for first aid use."
    },
    {
        id: 25,
        name: "Antifungal Cream",
        price: 8.99,
        image: "images/products/antifungal.jpg",
        description: "Treatment for fungal skin infections."
    },
    {
        id: 26,
        name: "Blood Pressure Cuff",
        price: 29.99,
        image: "images/products/bp-cuff.jpg",
        description: "Replacement cuff for blood pressure monitor."
    },
    {
        id: 27,
        name: "Vitamin B Complex",
        price: 13.99,
        image: "images/products/vitamin-b.jpg",
        description: "B-complex vitamins for energy and metabolism."
    },
    {
        id: 28,
        name: "Antibiotic Ointment",
        price: 6.99,
        image: "images/products/antibiotic.jpg",
        description: "Topical antibiotic for minor cuts and scrapes."
    },
    {
        id: 29,
        name: "Cold Compress",
        price: 5.99,
        image: "images/products/cold-compress.jpg",
        description: "Instant cold compress for injuries."
    },
    {
        id: 30,
        name: "Digestive Enzymes",
        price: 15.99,
        image: "images/products/enzymes.jpg",
        description: "Digestive enzyme supplements for better digestion."
    },
    {
        id: 31,
        name: "Ear Drops",
        price: 7.99,
        image: "images/products/ear-drops.jpg",
        description: "Relief from ear pain and wax buildup."
    },
    {
        id: 32,
        name: "Fever Reducer",
        price: 6.99,
        image: "images/products/fever-reducer.jpg",
        description: "Fever and pain relief medication."
    },
    {
        id: 33,
        name: "First Aid Tape",
        price: 3.99,
        image: "images/products/tape.jpg",
        description: "Medical adhesive tape for bandages."
    },
    {
        id: 34,
        name: "Hand Sanitizer Wipes",
        price: 4.99,
        image: "images/products/sanitizer-wipes.jpg",
        description: "Antibacterial wipes for hand cleaning."
    },
    {
        id: 35,
        name: "Heart Rate Monitor",
        price: 34.99,
        image: "images/products/heart-rate.jpg",
        description: "Digital heart rate monitoring device."
    },
    {
        id: 36,
        name: "Iron Supplements",
        price: 11.99,
        image: "images/products/iron.jpg",
        description: "Iron supplements for anemia prevention."
    },
    {
        id: 37,
        name: "Joint Support Supplements",
        price: 19.99,
        image: "images/products/joint-support.jpg",
        description: "Supplements for joint health and mobility."
    },
    {
        id: 38,
        name: "Laxative Tablets",
        price: 6.99,
        image: "images/products/laxative.jpg",
        description: "Gentle relief from constipation."
    },
    {
        id: 39,
        name: "Medical Gloves",
        price: 5.99,
        image: "images/products/gloves.jpg",
        description: "Box of 100 disposable medical gloves."
    },
    {
        id: 40,
        name: "Motion Sickness Tablets",
        price: 8.99,
        image: "images/products/motion-sickness.jpg",
        description: "Prevention and relief from motion sickness."
    },
    {
        id: 41,
        name: "Muscle Relaxant Cream",
        price: 10.99,
        image: "images/products/muscle-relaxant.jpg",
        description: "Topical cream for muscle tension relief."
    },
    {
        id: 42,
        name: "Nail Care Kit",
        price: 7.99,
        image: "images/products/nail-care.jpg",
        description: "Complete kit for nail care and maintenance."
    },
    {
        id: 43,
        name: "Omega-3 Supplements",
        price: 17.99,
        image: "images/products/omega-3.jpg",
        description: "Fish oil supplements for heart health."
    },
    {
        id: 44,
        name: "Oral Pain Relief",
        price: 5.99,
        image: "images/products/oral-pain.jpg",
        description: "Gel for relief from oral pain and sores."
    },
    {
        id: 45,
        name: "Pediatric Fever Reducer",
        price: 8.99,
        image: "images/products/pediatric-fever.jpg",
        description: "Children's fever and pain relief medication."
    },
    {
        id: 46,
        name: "Probiotic Supplements",
        price: 14.99,
        image: "images/products/probiotic.jpg",
        description: "Probiotic supplements for gut health."
    },
    {
        id: 47,
        name: "Reusable Face Mask",
        price: 9.99,
        image: "images/products/reusable-mask.jpg",
        description: "Washable face mask with filter pocket."
    },
    {
        id: 48,
        name: "Saline Solution",
        price: 4.99,
        image: "images/products/saline.jpg",
        description: "Sterile saline solution for wound cleaning."
    },
    {
        id: 49,
        name: "Sinus Relief Spray",
        price: 7.99,
        image: "images/products/sinus-spray.jpg",
        description: "Relief from sinus congestion and pressure."
    },
    {
        id: 50,
        name: "Skin Moisturizer",
        price: 8.99,
        image: "images/products/moisturizer.jpg",
        description: "Hydrating moisturizer for dry skin."
    },
    {
        id: 51,
        name: "Sleep Mask",
        price: 6.99,
        image: "images/products/sleep-mask.jpg",
        description: "Comfortable sleep mask for better rest."
    },
    {
        id: 52,
        name: "Sore Throat Lozenges",
        price: 5.99,
        image: "images/products/lozenges.jpg",
        description: "Medicated lozenges for sore throat relief."
    },
    {
        id: 53,
        name: "Sports Bandage",
        price: 4.99,
        image: "images/products/sports-bandage.jpg",
        description: "Elastic sports bandage for injuries."
    },
    {
        id: 54,
        name: "Stomach Settler",
        price: 6.99,
        image: "images/products/stomach-settler.jpg",
        description: "Relief from nausea and upset stomach."
    },
    {
        id: 55,
        name: "Sun Protection Lotion",
        price: 12.99,
        image: "images/products/sun-protection.jpg",
        description: "High SPF sun protection lotion."
    },
    {
        id: 56,
        name: "Tension Relief Roll-On",
        price: 9.99,
        image: "images/products/tension-roll.jpg",
        description: "Roll-on for tension headache relief."
    },
    {
        id: 57,
        name: "Throat Spray",
        price: 7.99,
        image: "images/products/throat-spray.jpg",
        description: "Medicated spray for sore throat relief."
    },
    {
        id: 58,
        name: "Toothache Relief",
        price: 6.99,
        image: "images/products/toothache.jpg",
        description: "Gel for temporary toothache relief."
    },
    {
        id: 59,
        name: "Travel First Aid Kit",
        price: 19.99,
        image: "images/products/travel-kit.jpg",
        description: "Compact first aid kit for travel."
    },
    {
        id: 60,
        name: "Vitamin E Oil",
        price: 8.99,
        image: "images/products/vitamin-e.jpg",
        description: "Pure vitamin E oil for skin care."
    },
    {
        id: 61,
        name: "Wart Remover",
        price: 7.99,
        image: "images/products/wart-remover.jpg",
        description: "Treatment for common warts."
    },
    {
        id: 62,
        name: "Weight Management Supplements",
        price: 24.99,
        image: "images/products/weight-management.jpg",
        description: "Natural supplements for weight management."
    },
    {
        id: 63,
        name: "Wound Cleanser",
        price: 5.99,
        image: "images/products/wound-cleaner.jpg",
        description: "Gentle wound cleaning solution."
    },
    {
        id: 64,
        name: "Zinc Supplements",
        price: 9.99,
        image: "images/products/zinc.jpg",
        description: "Zinc supplements for immune support."
    },
    {
        id: 65,
        name: "Acne Treatment",
        price: 11.99,
        image: "images/products/acne.jpg",
        description: "Topical treatment for acne."
    },
    {
        id: 66,
        name: "Allergy Relief Eye Drops",
        price: 8.99,
        image: "images/products/allergy-drops.jpg",
        description: "Eye drops for allergy relief."
    },
    {
        id: 67,
        name: "Anti-Dandruff Shampoo",
        price: 12.99,
        image: "images/products/dandruff.jpg",
        description: "Medicated shampoo for dandruff control."
    },
    {
        id: 68,
        name: "Anti-Fungal Powder",
        price: 6.99,
        image: "images/products/fungal-powder.jpg",
        description: "Powder for fungal infections."
    },
    {
        id: 69,
        name: "Anti-Itch Cream",
        price: 7.99,
        image: "images/products/itch-cream.jpg",
        description: "Relief from itching and irritation."
    },
    {
        id: 70,
        name: "Baby Care Kit",
        price: 29.99,
        image: "images/products/baby-care.jpg",
        description: "Complete kit for baby care needs."
    },
    {
        id: 71,
        name: "Back Pain Relief",
        price: 13.99,
        image: "images/products/back-pain.jpg",
        description: "Topical treatment for back pain."
    },
    {
        id: 72,
        name: "Bacterial Vaginosis Treatment",
        price: 15.99,
        image: "images/products/bv-treatment.jpg",
        description: "Treatment for bacterial vaginosis."
    },
    {
        id: 73,
        name: "Bunion Relief",
        price: 9.99,
        image: "images/products/bunion.jpg",
        description: "Relief from bunion pain."
    },
    {
        id: 74,
        name: "Burn Relief Gel",
        price: 8.99,
        image: "images/products/burn-gel.jpg",
        description: "Cooling gel for burn relief."
    },
    {
        id: 75,
        name: "Callus Remover",
        price: 6.99,
        image: "images/products/callus.jpg",
        description: "Treatment for calluses and corns."
    },
    {
        id: 76,
        name: "Canker Sore Treatment",
        price: 5.99,
        image: "images/products/canker.jpg",
        description: "Relief from canker sores."
    },
    {
        id: 77,
        name: "Cholesterol Monitor",
        price: 44.99,
        image: "images/products/cholesterol.jpg",
        description: "Home cholesterol monitoring device."
    },
    {
        id: 78,
        name: "Cold Sore Treatment",
        price: 7.99,
        image: "images/products/cold-sore.jpg",
        description: "Treatment for cold sores."
    },
    {
        id: 79,
        name: "Cough Drops",
        price: 4.99,
        image: "images/products/cough-drops.jpg",
        description: "Medicated cough drops."
    },
    {
        id: 80,
        name: "Dental Floss",
        price: 3.99,
        image: "images/products/dental-floss.jpg",
        description: "Waxed dental floss for oral hygiene."
    },
    {
        id: 81,
        name: "Diabetes Test Kit",
        price: 34.99,
        image: "images/products/diabetes-kit.jpg",
        description: "Complete diabetes testing kit."
    },
    {
        id: 82,
        name: "Ear Wax Removal Kit",
        price: 9.99,
        image: "images/products/ear-wax.jpg",
        description: "Safe ear wax removal kit."
    },
    {
        id: 83,
        name: "Eye Wash Solution",
        price: 6.99,
        image: "images/products/eye-wash.jpg",
        description: "Sterile eye wash solution."
    },
    {
        id: 84,
        name: "Fever Patch",
        price: 5.99,
        image: "images/products/fever-patch.jpg",
        description: "Cooling patch for fever relief."
    },
    {
        id: 85,
        name: "First Aid Manual",
        price: 12.99,
        image: "images/products/first-aid-manual.jpg",
        description: "Comprehensive first aid guide."
    }
];

// Render products
function renderProducts() {
    const productsContainer = document.querySelector('.products-grid');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">₵${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart-btn">Add to Cart</button>
        </div>
    `).join('');
}

// Add item to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showAddToCartNotification();
}

// Update cart count in navigation
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Show notification when item is added to cart
function showAddToCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Item added to cart!';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
}); 