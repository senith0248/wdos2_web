document.getElementById("login_Form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    authenticateUser(username, password);
});

function authenticateUser(username, password) {
    fetch("users.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const user = data.user.find(user => user.username === username && user.password === password);
            if (user) {
             
                document.getElementById("loginMessage").textContent = "Login successful!";
               
                if (user.role === 'admin') {
                   
                    window.location.href = "dashboard.html";
                } else if (user.role === 'site_user') {
                   
                    window.location.href = "index.html";
                }
            } else {
            
                document.getElementById("loginMessage").textContent = "Invalid username or password.";
            }
        })
        .catch(error => console.error("Error loading users.json:", error));
}
