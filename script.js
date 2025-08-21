// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and functionality
    initLoadingScreen();
    initHeroAnimations();
    initScrollAnimations();
    initProductAnimations();
    initInteractiveFeatures();
    initMobileMenu();
    initCartFunctionality();
    initNewsletterForm();
    initSmoothScrolling();
});

// Loading Screen Animation
function initLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loaderText = document.querySelector('.loader-text');
    const loaderCircle = document.querySelector('.loader-circle');
    
    // Animate loader text
    gsap.fromTo(loaderText, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    
    // Animate loader circle
    gsap.fromTo(loaderCircle,
        { scale: 0, rotation: 0 },
        { scale: 1, rotation: 360, duration: 1.5, ease: "back.out(1.7)" }
    );
    
    // Hide loading screen after 3 seconds
    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                loadingScreen.style.display = 'none';
                // Start hero animations after loading
                startHeroAnimations();
            }
        });
    }, 1000);
}

// Hero Section Animations
function initHeroAnimations() {
    // Initial state - hide elements
    gsap.set('.hero-title .title-line', { opacity: 0, y: 50 });
    gsap.set('.hero-subtitle', { opacity: 0, y: 30 });
    gsap.set('.hero-buttons', { opacity: 0, y: 30 });
    gsap.set('.product-card', { opacity: 0, scale: 0.8, y: 50 });
    gsap.set('.floating-shapes .shape', { opacity: 0, scale: 0 });
}

function startHeroAnimations() {
    // Animate floating shapes
    gsap.to('.floating-shapes .shape', {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
    
    // Animate hero title lines
    gsap.to('.hero-title .title-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });
    
    // Animate subtitle
    gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
    });
    
    // Animate buttons
    gsap.to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        ease: "power2.out"
    });
    
    // Animate product cards
    gsap.to('.product-card', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1.5,
        ease: "back.out(1.7)"
    });
}

// Scroll Animations
function initScrollAnimations() {
    // Navbar scroll effect
    gsap.to('.navbar', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '+=100',
            scrub: true
        },
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    });
    
    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.fromTo(header, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Category cards animation
    gsap.utils.toArray('.category-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Product items animation
    gsap.utils.toArray('.product-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Feature items animation
    gsap.utils.toArray('.feature-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // About section animation
    gsap.fromTo('.about-content',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.about',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Contact section animation
    gsap.fromTo('.contact-content',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.contact',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Newsletter animation
    gsap.fromTo('.newsletter-content',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.newsletter',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Product Animations
function initProductAnimations() {
    // Product hover effects
    gsap.utils.toArray('.product-item').forEach(item => {
        const image = item.querySelector('.product-image img');
        const overlay = item.querySelector('.product-overlay');
        
        // Image scale on hover
        item.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Category card hover effects
    gsap.utils.toArray('.category-card').forEach(card => {
        const icon = card.querySelector('.category-icon');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 360,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        });
    });
}

// Interactive Features
function initInteractiveFeatures() {
    // Button hover effects
    gsap.utils.toArray('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
    
    // Navigation link hover effects
    gsap.utils.toArray('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -2,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
    
    // Add to cart button functionality
    gsap.utils.toArray('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animate button
            gsap.to(btn, {
                scale: 0.9,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
            
            // Update cart count
            updateCartCount();
            
            // Show success message
            showNotification('Product added to cart!', 'success');
        });
    });
    
    // Quick view button functionality
    gsap.utils.toArray('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animate button
            gsap.to(btn, {
                scale: 0.9,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
            
            // Show quick view modal (placeholder)
            showNotification('Quick view feature coming soon!', 'info');
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            
            if (!isOpen) {
                navMenu.classList.add('active');
                gsap.fromTo(navMenu, 
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                );
                
                // Animate hamburger to X
                gsap.to(mobileMenuBtn.querySelectorAll('span'), {
                    rotation: 45,
                    duration: 0.3,
                    ease: "power2.out",
                    stagger: 0.1
                });
            } else {
                gsap.to(navMenu, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: "power2.out",
                    onComplete: () => navMenu.classList.remove('active')
                });
                
                // Animate X back to hamburger
                gsap.to(mobileMenuBtn.querySelectorAll('span'), {
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out",
                    stagger: 0.1
                });
            }
        });
    }
}

// Cart Functionality
function initCartFunctionality() {
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    window.updateCartCount = function() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Animate cart count
        gsap.to(cartCountElement, {
            scale: 1.3,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    };
    
    // Cart button click
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            showNotification('Cart feature coming soon!', 'info');
        });
    }
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const subscribeBtn = document.querySelector('.newsletter .btn-primary');
    
    if (newsletterForm && subscribeBtn) {
        subscribeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Animate button
                gsap.to(subscribeBtn, {
                    scale: 0.9,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
                
                showNotification('Thank you for subscribing!', 'success');
                newsletterInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
    
    // Contact form functionality
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                // Animate submit button
                const submitBtn = contactForm.querySelector('.btn-primary');
                gsap.to(submitBtn, {
                    scale: 0.9,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
                
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    gsap.utils.toArray('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                // Smooth scroll to target
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { 
                        y: target, 
                        offsetY: 80 
                    },
                    ease: "power2.inOut"
                });
                
                // Add visual feedback
                gsap.to(link, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
            }
        });
    });
    
    // Also handle button clicks that should scroll
    const shopNowBtn = document.querySelector('.hero-buttons .btn-primary');
    const exploreBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => {
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { 
                        y: productsSection, 
                        offsetY: 80 
                    },
                    ease: "power2.inOut"
                });
            }
        });
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const categoriesSection = document.querySelector('#categories');
            if (categoriesSection) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { 
                        y: categoriesSection, 
                        offsetY: 80 
                    },
                    ease: "power2.inOut"
                });
            }
        });
    }
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    gsap.to(notification, {
        x: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    });
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        gsap.to(notification, {
            x: 400,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => notification.remove()
        });
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            gsap.to(notification, {
                x: 400,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => notification.remove()
            });
        }
    }, 5000);
}

// Parallax effect for floating shapes
function initParallaxEffect() {
    gsap.utils.toArray('.floating-shapes .shape').forEach((shape, index) => {
        gsap.to(shape, {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
}

// Initialize parallax effect
initParallaxEffect();

// Performance optimization: Throttle scroll events
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
    }
}

// Add scroll performance optimization
window.addEventListener('scroll', throttle(() => {
    // Any scroll-based optimizations can go here
}, 16)); // ~60fps

// Add window resize handling
window.addEventListener('resize', throttle(() => {
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
}, 250));

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    // Add touch-specific interactions here
    document.body.classList.add('touch-device');
}

// Performance monitoring (optional)
if (window.performance && window.performance.mark) {
    window.performance.mark('ecommerce-frontend-loaded');
}

// Export functions for potential external use
window.LuxeCart = {
    updateCartCount,
    showNotification,
    initHeroAnimations,
    initScrollAnimations
};
