document.addEventListener("DOMContentLoaded", function () {
    // Navigasi Mobile (Hamburger Menu)
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Interaksi Simpel Form Kontak
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Terima kasih! Pesan Anda telah terkirim ke Velora Mobile.");
            contactForm.reset();
        });
    }
});