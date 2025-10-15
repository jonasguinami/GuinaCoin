document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DA SIDEBAR (MENU LATERAL) ---
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    const toggleSidebar = () => sidebar.classList.toggle('open');

    menuToggle.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);

    sidebar.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    });

    // --- ANIMAÇÃO DE ELEMENTOS AO ROLAR A PÁGINA ---
    const progressBar = document.getElementById('progressBar');
    const targetProgress = 5; // Meta de progresso em %

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animação geral para elementos
                entry.target.classList.add('visible');
                
                // Animação específica para a barra de progresso
                if (entry.target.id === 'progressBar') {
                    setTimeout(() => {
                        entry.target.querySelector('.progress-fill').style.width = `${targetProgress}%`;
                    }, 300); // Pequeno delay para efeito
                }
                // Des-observa o elemento após a animação para não repetir
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // A animação começa quando 20% do elemento está visível
    });

    // Observa todos os elementos com a classe .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    // Observa a barra de progresso
    if (progressBar) {
        observer.observe(progressBar);
    }


    // --- FUNCIONALIDADE DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        let instagram = document.getElementById('instagram').value.trim();

        if (nome === '' || instagram === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (instagram.startsWith('@')) {
            instagram = instagram.substring(1);
        }

        const numeroWhatsapp = '5594992173050';
        const mensagem = `Olá! Meu nome é ${nome} e meu Instagram é @${instagram}. Tenho interesse no projeto Guinacoin AI!`;
        const whatsappURL = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
        
        window.open(whatsappURL, '_blank');
    });

});