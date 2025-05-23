
    document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Smooth scrolling para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se aberto
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });
    
    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
                emailInput.value = '';
            }
        });
    }
    
    // Efeito de rolagem para revelar elementos
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.welcome-content, .info-box, .gallery img');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Adiciona estilos iniciais para animação
    document.querySelectorAll('.welcome-content, .info-box, .gallery img').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar a página
});
// Abrir/Feixar Modais
const openModal = (modalId) => document.getElementById(modalId).style.display = 'flex';
const closeModal = (modalId) => document.getElementById(modalId).style.display = 'none';

// Event Listeners
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeModal(closeBtn.closest('.modal').id);
    });
});

document.querySelector('.register-btn').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('registerModal');
});

document.querySelector('.new-topic-btn').addEventListener('click', () => {
    openModal('newTopicModal');
});

// Busca
document.querySelector('.search-bar input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.forum-topic').forEach(topic => {
        const title = topic.querySelector('h3').innerText.toLowerCase();
        topic.style.display = title.includes(searchTerm) ? 'flex' : 'none';
    });
});

// Submit Forms (Exemplo básico)
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registro enviado!');
    closeModal('registerModal');
});

document.getElementById('newTopicForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Tópico criado!');
    closeModal('newTopicModal');
});
