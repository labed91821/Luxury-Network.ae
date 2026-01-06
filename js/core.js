document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LOADER LOGIC (Fade out white screen) ---
    const loader = document.getElementById('loader');
    if (loader) {
        // Optional: specific timeout or load event
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000); // 1 second delay for "premium" feel
        });
    }

    // --- 2. NAVIGATION (Hamburger & Mobile Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle hamburger icon if needed (e.g., to 'X')
            if (navLinks.classList.contains('active')) {
                hamburger.textContent = '✕'; // Close icon
            } else {
                hamburger.textContent = '☰'; // Menu icon
            }
        });
    }

    // --- 3. ANIMATIONS (Fade Up Reveal) ---
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only run once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


    // --- 4. SWIPER ENGINE (The Carousel Logic) ---
    
    // A. Editor's Choice (Exclusive)
    if (document.querySelector('.swiper-manual-1')) {
        new Swiper('.swiper-manual-1', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800, // Premium weighted slide speed
            navigation: {
                nextEl: '.next-1',
                prevEl: '.prev-1',
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // B. Residential Portfolio
    if (document.querySelector('.swiper-manual-2')) {
        new Swiper('.swiper-manual-2', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            navigation: {
                nextEl: '.next-2',
                prevEl: '.prev-2',
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // C. Commercial Assets
    if (document.querySelector('.swiper-manual-3')) {
        new Swiper('.swiper-manual-3', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            navigation: {
                nextEl: '.next-3',
                prevEl: '.prev-3',
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    console.log("Luxury Engine Initialized.");
});
