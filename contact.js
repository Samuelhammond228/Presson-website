document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        date: new Date().toISOString()
    };
    
    // In a real application, you would send this data to a server
    // For now, we'll just store it in localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(formData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear form
    this.reset();
}); 