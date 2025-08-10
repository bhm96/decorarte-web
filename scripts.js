
        // Menú móvil toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('open');
        });

        // Cerrar menú móvil al hacer clic en un enlace
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.remove('open');
            });
        });

        // Scroll suave para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Validación del formulario
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            let isValid = true;
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const email = document.getElementById('telefono');
            const mensaje = document.getElementById('mensaje');
            
            // Validar nombre
            if (nombre.value.trim() === '') {
                document.getElementById('nombre-error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('nombre-error').classList.add('hidden');
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                document.getElementById('email-error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('email-error').classList.add('hidden');
            }
                
            // Validar telefono
            const phoneRegex = /^09\d{8}$/;
            if (!phoneRegex.test(telefono.value.trim())) {
                document.getElementById('telefono-error').textContent = 'Por favor ingresa un número válido (ej: 0998765432)';
                document.getElementById('telefono-error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('telefono-error').classList.add('hidden');
            }
                
            // Validar mensaje
            if (mensaje.value.trim() === '') {
                document.getElementById('mensaje-error').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('mensaje-error').classList.add('hidden');
            }
            
            // Si todo es válido, mostrar mensaje de éxito
            if (!isValid) {
                e.preventDefault();
            }
        });

        // Animación al hacer scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            // Puedes agregar más animaciones basadas en la posición del scroll
            if (scrollPosition > 100) {
                document.querySelector('nav').classList.add('shadow-lg');
            } else {
                document.querySelector('nav').classList.remove('shadow-lg');
            }
        });
    
