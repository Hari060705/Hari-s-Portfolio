document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    alert(`Thank you, ${name}, for reaching out! We will respond to you at ${email} soon.`);

    // Add form submission logic here (e.g., send to backend)
});

// Scroll animation when clicking nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
