// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu toggle button to the DOM
    const headerContainer = document.querySelector('.header-container');
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    headerContainer.appendChild(mobileMenuToggle);

    // Toggle mobile menu
    const navList = document.querySelector('.nav-list');
    mobileMenuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        
        // Change icon based on menu state
        if (navList.classList.contains('active')) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Highlight active menu item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveLink);
    
    // Header scroll effect
    const header = document.querySelector('.header-main');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'var(--light-color)';
            header.style.boxShadow = 'var(--shadow)';
        }
    });
});