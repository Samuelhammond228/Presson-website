document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('Shakes').value;
    const password = document.getElementById('Shakes@500').value;
    
    // This is a simple example. In a real application, you would:
    // 1. Use HTTPS
    // 2. Hash passwords
    // 3. Use proper authentication
    // 4. Implement session management
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}); 