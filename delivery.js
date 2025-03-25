// Sample delivery personnel data
const deliveryPersonnel = {
    motorcycle: [
        {
            id: 1,
            name: "John Doe",
            phone: "+233 24 123 4567",
            vehicle: "Motorcycle",
            plateNumber: "M-1234",
            rating: 4.8
        },
        {
            id: 2,
            name: "Jane Smith",
            phone: "+233 27 765 4321",
            vehicle: "Motorcycle",
            plateNumber: "M-5678",
            rating: 4.9
        }
    ],
    car: [
        {
            id: 3,
            name: "Mike Johnson",
            phone: "+233 20 987 6543",
            vehicle: "Car",
            plateNumber: "C-1234",
            rating: 4.7
        },
        {
            id: 4,
            name: "Sarah Wilson",
            phone: "+233 24 345 6789",
            vehicle: "Car",
            plateNumber: "C-5678",
            rating: 4.9
        }
    ]
};

let selectedDeliveryType = null;
let selectedDeliveryPerson = null;

function selectDeliveryType(type) {
    selectedDeliveryType = type;
    document.getElementById('deliveryForm').style.display = 'block';
    document.querySelector('.delivery-options').style.display = 'none';
}

document.getElementById('deliveryDetailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Randomly select a delivery person based on vehicle type
    const availablePersonnel = deliveryPersonnel[selectedDeliveryType];
    selectedDeliveryPerson = availablePersonnel[Math.floor(Math.random() * availablePersonnel.length)];
    
    // Store delivery details
    const deliveryDetails = {
        type: selectedDeliveryType,
        fullName: document.getElementById('fullName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address: document.getElementById('address').value,
        landmark: document.getElementById('landmark').value,
        instructions: document.getElementById('deliveryInstructions').value,
        deliveryPerson: selectedDeliveryPerson,
        deliveryFee: selectedDeliveryType === 'motorcycle' ? 5.00 : 10.00,
        orderTime: new Date().toLocaleString()
    };
    
    // Store in localStorage
    localStorage.setItem('deliveryDetails', JSON.stringify(deliveryDetails));
    
    // Show confirmation
    showDeliveryConfirmation(deliveryDetails);
});

function showDeliveryConfirmation(details) {
    document.getElementById('deliveryForm').style.display = 'none';
    const confirmationDiv = document.getElementById('deliveryConfirmation');
    confirmationDiv.style.display = 'block';
    
    // Display delivery details
    document.getElementById('deliveryInfo').innerHTML = `
        <p><strong>Delivery Type:</strong> ${details.type.charAt(0).toUpperCase() + details.type.slice(1)}</p>
        <p><strong>Delivery Fee:</strong> ₵${details.deliveryFee.toFixed(2)}</p>
        <p><strong>Estimated Delivery Time:</strong> 30-45 minutes</p>
    `;
    
    // Display delivery person details
    document.getElementById('deliveryPersonInfo').innerHTML = `
        <div class="delivery-person-card">
            <h4>Your Delivery Person</h4>
            <p><strong>Name:</strong> ${details.deliveryPerson.name}</p>
            <p><strong>Phone:</strong> ${details.deliveryPerson.phone}</p>
            <p><strong>Vehicle:</strong> ${details.deliveryPerson.vehicle}</p>
            <p><strong>Plate Number:</strong> ${details.deliveryPerson.plateNumber}</p>
            <p><strong>Rating:</strong> ${details.deliveryPerson.rating} ⭐</p>
        </div>
    `;
} 