// Define the slide index and call the showSlides function
var slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 10 seconds
}
document.addEventListener('DOMContentLoaded', function() {
    var moreLink = document.getElementById('more-link');
    var submenu = document.getElementById('submenu');

    moreLink.addEventListener('click', function(event) {
        event.preventDefault();
        submenu.classList.toggle('show');
        event.stopPropagation(); // Prevent event bubbling
    });

    // Close the submenu when clicking outside of it
    document.body.addEventListener('click', function(event) {
        if (!submenu.contains(event.target) && event.target !== moreLink) {
            submenu.classList.remove('show');
        }
    });
});



// Add event listener for the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var registrationNo = document.getElementById('regdno').value;
    var password = document.getElementById('password').value;

    // Add your custom login logic here
    if (validateCredentials(registrationNo, password)) {
        console.log('Login successful');
        // Redirect to another page
        window.location.href = 'user-details.html'; // Change 'user-details.html' to the desired page
    } else {
        console.log('Invalid credentials');
        // Display an error message to the user
        alert('Invalid credentials. Please try again.');
    }
});

// Function to validate user credentials
function validateCredentials(registrationNo, password) {
    // Add your validation logic here
    // For example, you might check against a database or hardcoded credentials
    if (registrationNo === '3010010453' && password === 'Yaswanth2662@') {
        return true; // Credentials are valid
    } else {
        return false; // Credentials are invalid
    }
}
