/* ==========================================
   PORTFOLIO JAVASCRIPT - MAIN FUNCTIONALITY
   ========================================== */

// ==========================================
// LOADING SCREEN
// ==========================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ==========================================
// SMOOTH SCROLL & NAVIGATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    const updateActiveNavLink = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ==========================================
    // HEADER HIDE/SHOW ON SCROLL
    // ==========================================
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
    
    // ==========================================
    // THEME TOGGLE
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Save theme preference
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ==========================================
    // SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = () => {
        const reveals = document.querySelectorAll('.achievement-card, .project-card, .certificate-card');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('scroll-reveal', 'revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Initial check
    
    // ==========================================
    // CERTIFICATE FILTERING
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            certificateCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
    
    // ==========================================
    // TYPEWRITER EFFECT
    // ==========================================
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        typewriterElement.style.borderRight = '2px solid';
        
        let charIndex = 0;
        
        const typeWriter = () => {
            if (charIndex < text.length) {
                typewriterElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 80);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    typewriterElement.style.borderRight = 'none';
                }, 500);
            }
        };
        
        // Start typewriter effect after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // ==========================================
    // PARALLAX EFFECT FOR HERO BACKGROUND
    // ==========================================
    const heroSection = document.querySelector('.hero-section');
    const geometricAccent = document.querySelector('.geometric-accent');
    
    if (heroSection && geometricAccent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                geometricAccent.style.transform = `translateY(${scrolled * 0.3}px)`;
                geometricAccent.style.opacity = 1 - (scrolled / heroHeight);
            }
        });
    }
    
    // ==========================================
    // PROJECT CARD HOVER EFFECTS
    // ==========================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
    
    // ==========================================
    // ACHIEVEMENT CARD ANIMATIONS
    // ==========================================
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ==========================================
    // CURSOR TRAIL EFFECT (SUBTLE)
    // ==========================================
    const createCursorTrail = () => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        
        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;
            
            trail.style.left = trailX + 'px';
            trail.style.top = trailY + 'px';
            
            requestAnimationFrame(animateTrail);
        };
        
        animateTrail();
    };
    
    // Only enable cursor trail on desktop
    if (window.innerWidth > 1024) {
        createCursorTrail();
    }
    
    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================
    // Lazy loading for images (if any are added)
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ==========================================
    // KEYBOARD NAVIGATION
    // ==========================================
    document.addEventListener('keydown', (e) => {
        // Press 'T' to go to top
        if (e.key === 't' || e.key === 'T') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Press 'D' to toggle dark mode
        if (e.key === 'd' || e.key === 'D') {
            themeToggle.click();
        }
    });
    
    // ==========================================
    // CONSOLE EASTER EGG
    // ==========================================
    console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold;');
    console.log('%cThanks for checking out my portfolio!', 'font-size: 14px;');
    console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #555;');
    console.log('%chttps://github.com/talhasami', 'font-size: 14px; color: #000; font-weight: bold;');
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
