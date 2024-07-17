document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.navbar .mobile-menu-toggle');

    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    })
})