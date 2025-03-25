// Check if admin is logged in
if (!localStorage.getItem('adminLoggedIn')) {
    window.location.href = 'admin-login.html';
}

// Load products
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productList = document.getElementById('productList');
    
    productList.innerHTML = products.map(product => `
        <div class="admin-list-item">
            <span>${product.name} - ₵${product.price}</span>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        </div>
    `).join('');
}

// Show add product modal
function showAddProductForm() {
    document.getElementById('addProductModal').style.display = 'block';
}

// Close add product modal
function closeAddProductModal() {
    document.getElementById('addProductModal').style.display = 'none';
}

// Handle product image upload
document.getElementById('productImageUpload').addEventListener('change', function(e) {
    const files = e.target.files;
    const previewGrid = document.getElementById('imagePreview');
    previewGrid.innerHTML = '';

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewItem = document.createElement('div');
            previewItem.className = 'image-preview-item';
            previewItem.innerHTML = `
                <img src="${e.target.result}" alt="Preview">
                <button class="remove-image" onclick="removeImage(this)">&times;</button>
            `;
            previewGrid.appendChild(previewItem);
        }
        reader.readAsDataURL(file);
    }
});

// Handle add product form submission
document.getElementById('addProductForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const product = {
        id: Date.now(),
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        category: document.getElementById('productCategory').value,
        image: document.getElementById('imagePreview').querySelector('img').src
    };
    
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    
    closeAddProductModal();
    loadProducts();
});

// Delete product
function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const updatedProducts = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        loadProducts();
    }
}

// Staff Management
function showStaffEditor() {
    document.getElementById('staffEditorModal').style.display = 'block';
    loadStaffMembers();
}

function closeStaffEditor() {
    document.getElementById('staffEditorModal').style.display = 'none';
}

function loadStaffMembers() {
    const staffList = document.getElementById('staffList');
    const staff = JSON.parse(localStorage.getItem('staff')) || [];
    
    staffList.innerHTML = staff.map(member => `
        <div class="admin-list-item">
            <div>
                <h4>${member.name}</h4>
                <p>${member.position}</p>
            </div>
            <div>
                <button onclick="editStaffMember(${member.id})">Edit</button>
                <button onclick="deleteStaffMember(${member.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Pharmacy Images Management
function showPharmacyImages() {
    document.getElementById('pharmacyImagesModal').style.display = 'block';
    loadPharmacyImages();
}

function closePharmacyImages() {
    document.getElementById('pharmacyImagesModal').style.display = 'none';
}

function loadPharmacyImages() {
    const previewGrid = document.getElementById('pharmacyImagePreview');
    const images = JSON.parse(localStorage.getItem('pharmacyImages')) || [];
    
    previewGrid.innerHTML = images.map(image => `
        <div class="image-preview-item">
            <img src="${image.url}" alt="Pharmacy Image">
            <button class="remove-image" onclick="removePharmacyImage('${image.id}')">&times;</button>
        </div>
    `).join('');
}

// Website Content Management
function showWebsiteContent() {
    // Implement website content editor
    alert('Website content editor coming soon!');
}

// Helper Functions
function removeImage(button) {
    button.parentElement.remove();
}

function removePharmacyImage(imageId) {
    const images = JSON.parse(localStorage.getItem('pharmacyImages')) || [];
    const updatedImages = images.filter(img => img.id !== imageId);
    localStorage.setItem('pharmacyImages', JSON.stringify(updatedImages));
    loadPharmacyImages();
}

// Load initial data
loadProducts(); 