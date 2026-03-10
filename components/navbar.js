(function () {
  function getBasePath() {
    // Si estás en /redirect/, vuelve un nivel para apuntar a la raíz del proyecto
    return window.location.pathname.includes('/redirect/') ? '../' : '';
  }

  function renderNavbar() {
    const container = document.getElementById('navbar-container');
    if (!container) return;

    const base = getBasePath();

    container.innerHTML = `
      <nav class="fixed top-0 left-0 right-0 w-full z-50 glass-effect border-b border-beige/20 px-4 md:px-0">
        <div class="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <a href="${base}index.html" class="text-xl md:text-3xl font-bold tracking-[0.2em] serif uppercase">PielBy</a>
          <button class="block lg:hidden bg-gold-gradient text-white px-5 md:px-7 py-2 md:py-3 rounded-full text-[12px] md:text-sm font-bold uppercase tracking-widest hover:opacity-90 transition shadow-md active:scale-95">
            Agenda Tu Hora
        </button>
          
          <div class="hidden lg:flex space-x-10 text-[14px] font-semibold uppercase tracking-widest">
            <a href="${base}index.html#inicio" class="nav-link text-dark/70 hover:text-dark transition">Inicio</a>
            <a href="${base}redirect/tratamientos.html" class="nav-link text-dark/70 hover:text-dark transition">Tratamientos</a>
            <a href="${base}index.html#contacto" class="nav-link text-dark/70 hover:text-dark transition">Contacto</a>
          </div>

          <button id="mobile-menu-btn" class="lg:hidden p-2 text-dark hover:text-gold transition" aria-label="Abrir menú">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <button class="hidden lg:block bg-gold-gradient text-white px-5 md:px-7 py-2 md:py-3 rounded-full text-[12px] md:text-sm font-bold uppercase tracking-widest hover:opacity-90 transition shadow-md active:scale-95">
            Agenda Tu Hora
          </button>
        </div>
      </nav>

      <div id="mobile-menu" class="fixed inset-0 z-40 hidden">
        <div id="mobile-menu-overlay" class="absolute inset-0 bg-dark/95 backdrop-blur-2xl"></div>
        <div class="absolute right-0 top-[9vh] h-full w-72 bg-cream shadow-2xl">
          <div class="p-6 relative">
            <button id="mobile-menu-close" class="absolute top-6 right-6 text-dark/40 hover:text-dark transition" aria-label="Cerrar menú">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <nav class="space-y-12">
              <a href="${base}index.html#inicio" class="block text-dark hover:text-gold transition font-semibold uppercase tracking-widest text-sm">Inicio</a>
              <a href="${base}redirect/tratamientos.html" class="block text-dark hover:text-gold transition font-semibold uppercase tracking-widest text-sm">Tratamientos</a>
              <a href="${base}index.html#contacto" class="block text-dark hover:text-gold transition font-semibold uppercase tracking-widest text-sm">Contacto</a>
            </nav>
          </div>
        </div>
      </div>
    `;
  }

  function initNavbar() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (!mobileMenuBtn || !mobileMenu) return;

    const closeMobileMenu = () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    };

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    mobileMenuClose?.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay?.addEventListener('click', closeMobileMenu);

    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', closeMobileMenu);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderNavbar();
      initNavbar();
    });
  } else {
    renderNavbar();
    initNavbar();
  }
})();