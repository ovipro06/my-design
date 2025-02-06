// Mobile Navigation
const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNav = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', () => {
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  mobileNav.classList.toggle('hidden');
});

// Mobile Dropdown
const mobileDropdownButton = document.querySelector('.mobile-dropdown-button');
const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');

mobileDropdownButton.addEventListener('click', () => {
  mobileDropdownButton.classList.toggle('active');
  mobileDropdownContent.classList.toggle('show');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    // Reset dropdown state
    mobileDropdownButton.classList.remove('active');
    mobileDropdownContent.classList.remove('show');
  });
});

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert('Message sent! (Demo only)');
  contactForm.reset();
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();