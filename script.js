// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// FORM VALIDATION
const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (!name || !checkin || !checkout) {
        message.textContent = "Please fill all required fields.";
        message.style.color = "red";
    } else {
        message.textContent = ""; // Clear any previous error message
        modal.style.display = "block";
        form.reset();
    }
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});