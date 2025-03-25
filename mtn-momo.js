// MTN Mobile Money Integration
class MTNMoMoPayment {
    constructor() {
        this.apiKey = ''; // Your MTN MoMo API Key
        this.userId = ''; // Your MTN MoMo User ID
        this.primaryKey = ''; // Your MTN MoMo Primary Key
        this.callbackUrl = window.location.origin + '/payment-callback.html';
        this.environment = 'sandbox'; // Change to 'production' for live environment
    }

    // Initialize payment
    async initializePayment(amount, phoneNumber, orderId) {
        try {
            const response = await fetch('https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.getAuthToken()}`,
                    'X-Reference-Id': orderId,
                    'X-Target-Environment': this.environment,
                    'Ocp-Apim-Subscription-Key': this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: amount,
                    currency: 'GHS',
                    externalId: orderId,
                    payer: {
                        partyIdType: 'MSISDN',
                        partyId: phoneNumber
                    },
                    payerMessage: 'Payment for Pesson-Pharmaceuticals order',
                    payeeNote: 'Thank you for your purchase',
                    callbackUrl: this.callbackUrl
                })
            });

            if (!response.ok) {
                throw new Error('Payment initialization failed');
            }

            return await response.json();
        } catch (error) {
            console.error('MTN MoMo Payment Error:', error);
            throw error;
        }
    }

    // Get authentication token
    async getAuthToken() {
        try {
            const response = await fetch('https://sandbox.momodeveloper.mtn.com/collection/token/', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${btoa(this.userId + ':' + this.primaryKey)}`,
                    'X-Reference-Id': this.generateUUID(),
                    'X-Target-Environment': this.environment,
                    'Ocp-Apim-Subscription-Key': this.apiKey,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Authentication failed');
            }

            const data = await response.json();
            return data.access_token;
        } catch (error) {
            console.error('MTN MoMo Auth Error:', error);
            throw error;
        }
    }

    // Generate UUID for reference ID
    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Check payment status
    async checkPaymentStatus(orderId) {
        try {
            const response = await fetch(`https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/${orderId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.getAuthToken()}`,
                    'X-Target-Environment': this.environment,
                    'Ocp-Apim-Subscription-Key': this.apiKey
                }
            });

            if (!response.ok) {
                throw new Error('Failed to check payment status');
            }

            return await response.json();
        } catch (error) {
            console.error('MTN MoMo Status Check Error:', error);
            throw error;
        }
    }
}

// Initialize MTN MoMo Payment
const mtnMoMo = new MTNMoMoPayment();

// Handle payment button click
document.addEventListener('DOMContentLoaded', function() {
    const paymentButton = document.querySelector('.checkout-button');
    if (paymentButton) {
        paymentButton.addEventListener('click', async function(e) {
            e.preventDefault();
            
            // Get cart total from localStorage
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // Get phone number from user
            const phoneNumber = prompt('Please enter your MTN Mobile Money phone number:');
            if (!phoneNumber) return;

            try {
                // Generate order ID
                const orderId = mtnMoMo.generateUUID();
                
                // Initialize payment
                await mtnMoMo.initializePayment(total, phoneNumber, orderId);
                
                // Show success message
                showNotification('Payment request sent! Please check your phone for the MTN MoMo prompt.');
                
                // Clear cart
                localStorage.removeItem('cart');
                updateCartCount(0);
                
                // Redirect to success page
                window.location.href = 'payment-success.html';
            } catch (error) {
                showNotification('Payment failed. Please try again.', 'error');
            }
        });
    }
});

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Update cart count
function updateCartCount(count) {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
} 