document.addEventListener('DOMContentLoaded', function() {
    // Video Modal
    const modal = document.getElementById('video-modal');
    const btn = document.getElementById('watch-video-btn');
    const span = document.getElementsByClassName('close-modal')[0];
    
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    span.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Calculator
    const calculatorForm = document.getElementById('economy-calculator');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const budget = parseFloat(document.getElementById('project-budget').value);
            const projectType = parseFloat(document.getElementById('project-type').value);
            
            if (budget && projectType) {
                const economy = budget * 0.2 * projectType;
                document.getElementById('economy-result').textContent = 
                    new Intl.NumberFormat('ru-RU', { 
                        style: 'currency', 
                        currency: 'RUB',
                        maximumFractionDigits: 0
                    }).format(economy);
                
                document.getElementById('calculator-result').style.display = 'block';
            }
        });
    }
    
    // Lead Form
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
            leadForm.reset();
        });
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    function animateOnScroll() {
        document.querySelectorAll('.fade-in').forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', function() {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        animateOnScroll();
    });
});