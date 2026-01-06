document.addEventListener("DOMContentLoaded", () => {
    // 1. LOADER LOGIC
    const loader = document.getElementById('loader');
    if (loader) {
        if (!sessionStorage.getItem('visited')) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
                sessionStorage.setItem('visited', 'true');
            }, 2500); // Slightly faster load
        } else {
            loader.style.display = 'none';
        }
    }

    // 2. MOBILE MENU TOGGLE
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate links in
            document.querySelectorAll('.nav-links li').forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // 3. SCROLL ANIMATIONS
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    // 4. ACTIVE LINK HIGHLIGHT
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-links a').forEach(link => {
        // Check if href matches current path OR if it's the homepage
        if(link.getAttribute('href') === currentPath || (currentPath === "" && link.getAttribute('href') === "index.html")) {
            link.classList.add('active');
        }
    });
});