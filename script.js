// ====== EVENT HANDLING ======

// 1. Click event on Send Message button
const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function (event) {
  event.preventDefault(); // stop form from refreshing the page

  if (validateForm()) {
    alert("✅ Message Sent Successfully!");
    sendBtn.textContent = "Sent!";
    sendBtn.style.backgroundColor = "green";
  } else {
    alert("❗ Please fill the form correctly before sending.");
  }
});

// 2. Hover effect on Send Button (change background)
sendBtn.addEventListener("mouseover", function () {
  sendBtn.style.backgroundColor = "#0056b3"; // darker blue
});
sendBtn.addEventListener("mouseout", function () {
  sendBtn.style.backgroundColor = ""; // reset to original
});

// 3. Keypress detection for real-time form validation
const inputs = document.querySelectorAll(
  ".contact-form input, .contact-form textarea"
);
inputs.forEach((input) => {
  input.addEventListener("keyup", function () {
    if (input.checkValidity()) {
      input.style.borderColor = "green";
    } else {
      input.style.borderColor = "red";
    }
  });
});

// 4. Bonus - Double click on Logo triggers Easter Egg
const logo = document.querySelector(".logo");
logo.addEventListener("dblclick", function () {
  alert("You found the Easter Egg! Welcome to MyShop Secret Club!");
});

// ====== INTERACTIVE ELEMENTS ======

// Image gallery slideshow
const images = [
  "images/product1.jpg",
  "images/product2.jpg",
  "images/product3.jpg",
];
let currentImageIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const nextImageBtn = document.getElementById("nextImageBtn");

nextImageBtn.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  galleryImage.src = images[currentImageIndex];
});

// Accordion (Expand/Collapse FAQs)
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    // Toggle the accordion
    const content = this.nextElementSibling;
    content.classList.toggle("active");
  });
});

// ====== FORM VALIDATION FUNCTION ======

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementById("message");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    name.value.trim() === "" ||
    !emailRegex.test(email.value) ||
    password.value.length < 8 ||
    message.value.trim() === ""
  ) {
    return false;
  }
  return true;
}
