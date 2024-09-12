function display_nav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const planButtons = document.querySelectorAll('.plan .btn');

planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = e.target.closest('.plan').querySelector('h3').innerText;
        alert(`You have selected the ${planName}. Please proceed to sign up!`);
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert(`Thank you, ${name}! Your message has been sent successfully!`);
        document.getElementById('contact-form').reset();
    }
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

const toggle = document.querySelector('.nav-toggle');
const toggleIcon = document.querySelector('.nav-toggle i');
const menu = document.querySelector('.nav-menu');

toggle.onclick = function () {
    menu.classList.toggle('open');
    const isOpenMenu = menu.classList.contains('open');
    toggleIcon.className = isOpenMenu ? 'fas fa-times' : 'fas fa-bars';
}
