// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 3D Animation (Using Three.js)
  // Add Three.js script for 3D animations in the hero section.
  
  // Remove hover effects and cursor following animations
  document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.transform = 'none';
    card.style.boxShadow = 'none';
  });

// Initialize particles
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle settings
    const particles = [];
    const particleCount = 100;
    let mouse = {
        x: null,
        y: null,
        radius: 150
    };

    // Create particles
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
            this.color = '#00ff9d';
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            if (distance < mouse.radius) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx/10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy/10;
                }
            }
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => particle.update());
        particles.forEach(particle => particle.draw());
        requestAnimationFrame(animate);
    }

    animate();
});

// Enhanced scroll animations
const scrollElements = document.querySelectorAll('.reveal');

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Enhanced navigation
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    nav.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
    nav.classList.remove('scroll-up');
    nav.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
    nav.classList.remove('scroll-down');
    nav.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Enhanced form validation and submission
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.innerHTML = '<span class="loading-spinner"></span> Sending...';
    submitButton.disabled = true;

    // Simulate form submission (replace
    setTimeout(() => {
      submitButton.innerHTML = 'Message Sent!';
      submitButton.style.backgroundColor = '#4CAF50';
      setTimeout(() => {
        submitButton.innerHTML = 'Send Message';
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '';
      }, 3000);
    }, 1500);
  });
}

// Theme toggle with smooth animation
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = themeToggle.querySelector('i');
let isAnimating = false;

themeToggle.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    
    toggleIcon.style.transform = 'rotate(180deg)';
    
    setTimeout(() => {
        document.body.classList.toggle('light-theme');
        toggleIcon.className = document.body.classList.contains('light-theme') 
            ? 'fas fa-sun' 
            : 'fas fa-moon';
        toggleIcon.style.transform = 'rotate(0deg)';
        isAnimating = false;
    }, 150);
});

// Smooth scroll with enhanced behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse position
    let mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Wave points
    const points = [];
    const numberOfPoints = 50;
    const spacing = canvas.width / numberOfPoints;

    // Initialize points
    for (let i = 0; i < numberOfPoints; i++) {
        points.push({
            x: i * spacing,
            y: canvas.height / 2,
            baseY: canvas.height / 2,
            speed: 0.03,
            offset: Math.random() * Math.PI * 2
        });
    }

    // Colors
    const gradientColors = [
        { r: 0, g: 255, b: 157 },   // Cyan
        { r: 157, g: 0, b: 255 },   // Purple
        { r: 255, g: 0, b: 157 }    // Pink
    ];

    let colorIndex = 0;
    let targetColor = gradientColors[0];
    let currentColor = { ...targetColor };

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function animate() {
        ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update colors
        currentColor.r = lerp(currentColor.r, targetColor.r, 0.01);
        currentColor.g = lerp(currentColor.g, targetColor.g, 0.01);
        currentColor.b = lerp(currentColor.b, targetColor.b, 0.01);

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        // Draw waves
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            
            // Calculate distance from mouse
            const dx = mouse.x - point.x;
            const dy = mouse.y - point.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Update point position
            const amplitude = Math.max(0, 1 - distance / 300) * 100;
            point.offset += point.speed;
            point.y = point.baseY + Math.sin(point.offset) * amplitude;

            // Create curved line
            if (i === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                const xc = (point.x + points[i - 1].x) / 2;
                const yc = (point.y + points[i - 1].y) / 2;
                ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
            }
        }

        // Complete the path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.5)`);
        gradient.addColorStop(1, `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.2)`);

        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connecting lines
        ctx.strokeStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.2)`;
        ctx.lineWidth = 2;
        for (let i = 0; i < points.length - 1; i++) {
            if (i % 3 === 0) {
                const distanceToMouse = Math.sqrt(
                    Math.pow(mouse.x - points[i].x, 2) + 
                    Math.pow(mouse.y - points[i].y, 2)
                );
                
                if (distanceToMouse < 200) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        // Change colors periodically
        if (Math.random() < 0.002) {
            colorIndex = (colorIndex + 1) % gradientColors.length;
            targetColor = gradientColors[colorIndex];
        }

        requestAnimationFrame(animate);
    }

    // Add interactive effects
    canvas.addEventListener('click', () => {
        // Change color on click
        colorIndex = (colorIndex + 1) % gradientColors.length;
        targetColor = gradientColors[colorIndex];

        // Create ripple effect
        points.forEach(point => {
            point.offset = Math.random() * Math.PI * 2;
            point.speed = 0.05 + Math.random() * 0.05;
        });
    });

    // Start animation
    animate();
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    // Show content after loader
    setTimeout(() => {
        const loader = document.querySelector('.loader-container');
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
});

// Prevent page content from being visible during load
document.body.style.visibility = 'hidden';
document.querySelector('.loader-container').style.visibility = 'visible';

window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
});

// Scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
    // Default configuration for ScrollReveal
    ScrollReveal({
        distance: '60px',
        duration: 1500,
        delay: 400,
        reset: false
    });

    // Hero section
    ScrollReveal().reveal('.hero-content h1', { 
        origin: 'left', 
        delay: 500 
    });
    ScrollReveal().reveal('.hero-content p', { 
        origin: 'right', 
        delay: 600 
    });
    ScrollReveal().reveal('.hero-content button', { 
        origin: 'bottom', 
        delay: 700 
    });

    // About section
    ScrollReveal().reveal('.profile-container', { 
        origin: 'left',
        delay: 300,
        distance: '100px'
    });
    ScrollReveal().reveal('.name', { 
        origin: 'right',
        delay: 400 
    });

    // Skills section
    ScrollReveal().reveal('.skills h2', { 
        origin: 'top'
    });
    ScrollReveal().reveal('.skill-card', { 
        origin: 'bottom',
        interval: 200 // Adds delay between each card
    });

    // Projects section
    ScrollReveal().reveal('.projects h2', { 
        origin: 'top' 
    });
    ScrollReveal().reveal('.project-card', { 
        origin: 'bottom',
        interval: 300
    });

    // Contact section
    ScrollReveal().reveal('.contact h2', { 
        origin: 'top' 
    });
    ScrollReveal().reveal('.contact form', { 
        origin: 'bottom',
        delay: 500 
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    // Create canvas for particle effect
    const canvas = document.createElement('canvas');
    canvas.classList.add('particles');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
            this.color = '#00ff9d';
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            if (distance < mouse.radius) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx/10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy/10;
                }
            }
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => particle.update());
        particles.forEach(particle => particle.draw());
        requestAnimationFrame(animate);
    }

    animate();
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const sphere = document.querySelector('.gradient-sphere');
    
    // Change gradient colors periodically
    const colors = [
        ['rgba(0, 183, 255, 0.15)', 'rgba(128, 0, 255, 0.15)', 'rgba(0, 255, 149, 0.15)'],
        ['rgba(255, 0, 128, 0.15)', 'rgba(255, 191, 0, 0.15)', 'rgba(0, 255, 255, 0.15)'],
        ['rgba(128, 0, 255, 0.15)', 'rgba(0, 255, 149, 0.15)', 'rgba(255, 191, 0, 0.15)']
    ];
    
    let colorIndex = 0;
    
    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        sphere.style.background = `linear-gradient(
            45deg,
            ${colors[colorIndex][0]},
            ${colors[colorIndex][1]},
            ${colors[colorIndex][2]}
        )`;
    }, 5000);

    // Add parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        sphere.style.transform = `translate(
            ${mouseX * 50}px,
            ${mouseY * 50}px
        )`;
    });
});