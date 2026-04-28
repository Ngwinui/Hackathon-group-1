// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// FORM VALIDATION
const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (!name || !checkin || !checkout) {
        message.textContent = "Please fill all required fields.";
        message.style.color = "red";
    } else {
        message.textContent = "Booking submitted successfully!";
        message.style.color = "lightgreen";
        form.reset();
    }
});