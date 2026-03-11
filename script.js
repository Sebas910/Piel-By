 function openSkinQuiz() {
            const modal = document.getElementById('quiz-modal');
            modal.classList.remove('hidden');
            document.getElementById('quiz-content').classList.remove('hidden');
            document.getElementById('quiz-result').classList.add('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeSkinQuiz() {
            const modal = document.getElementById('quiz-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function showResult(type) {
            const content = document.getElementById('quiz-content');
            const result = document.getElementById('quiz-result');
            const title = document.getElementById('result-title');
            const text = document.getElementById('result-text');

            content.classList.add('hidden');
            result.classList.remove('hidden');

            if (type === 'limpieza') {
                title.innerText = "Deep Detox Ritual";
                text.innerText = "Basado en tu respuesta, recomendamos un protocolo de limpieza ultrasónica para renovar la oxigenación de tus poros.";
            } else if (type === 'hidratacion') {
                title.innerText = "Hyaluronic Infusion";
                text.innerText = "Tu piel pide agua. Necesitas nuestra infusión de ácido hialurónico de bajo peso molecular para restaurar el brillo.";
            } else {
                title.innerText = "Luminous Peel";
                text.innerText = "La solución ideal es un peeling enzimático suave para suavizar la superficie y recuperar la uniformidad del tono.";
            }
        }

        // Navbar Scroll Logic
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (!nav) return;

            if (window.scrollY > 40) {
                nav.classList.add('shadow-xl');
            } else {
                nav.classList.remove('shadow-xl');
            }
        });