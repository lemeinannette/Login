document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("create-account-form");
    const usernameInput = document.getElementById("Name");
    const passwordInput = document.getElementById("Password");
    const emailInput = document.getElementById("Email");

    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const email = emailInput.value.trim();

        
        if (username === "" || password === "" || email === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

       
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Email:", email);

        alert("Account created successfully!");

        
    });

   
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
