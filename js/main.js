/* ============================================
   Sri Samayapuram Mahamariamman Devasthanam
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation + overlay backdrop
    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function openNav() {
        toggle.classList.add('active');
        nav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        toggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.contains('active') ? closeNav() : openNav();
        });
        overlay.addEventListener('click', closeNav);
        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    }

    // Sticky Header Shadow
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)';
        });
    }

    // Sub-Nav: stick below header + active state on scroll
    const subNav = document.querySelector('.sub-nav');
    if (subNav && header) {
        function updateSubNavTop() {
            subNav.style.top = header.offsetHeight + 'px';
        }
        updateSubNavTop();
        window.addEventListener('resize', updateSubNavTop);

        // Scroll offset for anchor links (header + subnav height)
        subNav.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    const offset = header.offsetHeight + subNav.offsetHeight + 10;
                    try { window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' }); }
                    catch(e) { window.scrollTo(0, target.offsetTop - offset); }
                }
            });
        });

        // Highlight active sub-nav link on scroll
        const sections = subNav.querySelectorAll('a[href^="#"]');
        window.addEventListener('scroll', () => {
            const offset = header.offsetHeight + subNav.offsetHeight + 20;
            let current = '';
            sections.forEach(link => {
                const sec = document.querySelector(link.getAttribute('href'));
                if (sec && sec.offsetTop - offset <= window.scrollY) current = link.getAttribute('href');
            });
            sections.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === current);
            });
        });
    }

    // Back to Top
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        });
        backToTop.addEventListener('click', () => {
            try { window.scrollTo({ top: 0, behavior: 'smooth' }); }
            catch(e) { window.scrollTo(0, 0); }
        });
    }

    // Hero Slider
    const slider = document.getElementById('heroSlider');
    if (slider) {
        const slides = slider.querySelectorAll('.slide');
        const dotsContainer = slider.querySelector('.slider-dots');
        let current = 0;
        let interval;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.slider-dot');

        function goTo(n) {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = (n + slides.length) % slides.length;
            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }

        function startAuto() { interval = setInterval(() => goTo(current + 1), 5000); }
        function stopAuto() { clearInterval(interval); }

        slider.querySelector('.prev')?.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
        slider.querySelector('.next')?.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
        startAuto();
    }

    // Gallery Horizontal Scroll
    document.querySelectorAll('.gallery-scroll-wrapper').forEach(wrapper => {
        const scroll = wrapper.querySelector('.gallery-scroll');
        const leftBtn = wrapper.querySelector('.scroll-left');
        const rightBtn = wrapper.querySelector('.scroll-right');
        if (scroll && leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => scroll.scrollBy({ left: -300, behavior: 'smooth' }));
            rightBtn.addEventListener('click', () => scroll.scrollBy({ left: 300, behavior: 'smooth' }));
        }
    });

    // Gallery Tabs (merged gallery page)
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.gallery-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const target = document.getElementById('tab-' + tab.dataset.tab);
            if (target) target.classList.add('active');
        });
    });

    // Gallery & Video Filters
    document.querySelectorAll('.gallery-filters').forEach(filterContainer => {
        const buttons = filterContainer.querySelectorAll('.filter-btn');
        const grid = filterContainer.parentElement.querySelector('.photo-gallery-grid, .video-gallery-grid');
        if (!grid) return;
        const cards = grid.querySelectorAll('.gallery-card, .video-card');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                cards.forEach(card => {
                    card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
                });
            });
        });
    });

    // Photo Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    if (lightbox) {
        const galleryCards = document.querySelectorAll('.gallery-card');
        let lightboxIndex = 0;
        const images = [];

        galleryCards.forEach((card, i) => {
            const img = card.querySelector('.gallery-thumb img');
            const title = card.querySelector('.gallery-info h4')?.textContent || '';
            images.push({ src: img.src.replace('w=400', 'w=1200'), title });

            card.querySelector('.gallery-zoom')?.addEventListener('click', () => {
                lightboxIndex = i;
                showLightbox();
            });
        });

        function showLightbox() {
            lightboxImg.src = images[lightboxIndex].src;
            lightboxCaption.textContent = images[lightboxIndex].title;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev')?.addEventListener('click', () => {
            lightboxIndex = (lightboxIndex - 1 + images.length) % images.length;
            showLightbox();
        });
        lightbox.querySelector('.lightbox-next')?.addEventListener('click', () => {
            lightboxIndex = (lightboxIndex + 1) % images.length;
            showLightbox();
        });
        lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
        document.addEventListener('keydown', e => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + images.length) % images.length; showLightbox(); }
            if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % images.length; showLightbox(); }
        });
    }

    // Video Modal
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
        document.querySelectorAll('.video-card').forEach(card => {
            card.addEventListener('click', () => {
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        videoModal.querySelector('.video-modal-close')?.addEventListener('click', () => {
            videoModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        videoModal.addEventListener('click', e => {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Visitor Counter
    // Uses CounterAPI (free, no account needed) — counts once per browser session
    // Namespace: ssmt-devasthanam | Key: site-visitors
    (function () {
        const el = document.getElementById('visitor-count');
        if (!el) return;
        const NS = 'ssmt-devasthanam', KEY = 'site-visitors';
        const counted = sessionStorage.getItem('ssmt-visit');
        const url = counted
            ? `https://api.counterapi.dev/v1/${NS}/${KEY}`
            : `https://api.counterapi.dev/v1/${NS}/${KEY}/up`;
        fetch(url)
            .then(r => r.json())
            .then(d => {
                if (!counted) sessionStorage.setItem('ssmt-visit', '1');
                if (d.count != null) el.textContent = Number(d.count).toLocaleString('en-IN');
            })
            .catch(() => {
                const wrap = el.closest('.visitor-counter');
                if (wrap) wrap.style.display = 'none';
            });
    })();

    // Contact Form — placeholder for Google Sheets integration
    // TODO: Replace GOOGLE_SCRIPT_URL with your deployed Apps Script web app URL
    const GOOGLE_SCRIPT_URL = ''; // e.g. 'https://script.google.com/macros/s/XXXXX/exec'
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(contactForm));

            if (!GOOGLE_SCRIPT_URL) {
                alert('Thank you for your message! 🙏\n\n(Form backend not yet configured — please contact us directly at +91 97911 67265)');
                contactForm.reset();
                return;
            }

            const btn = contactForm.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(() => {
                alert('Thank you for your message! We will get back to you soon. 🙏');
                contactForm.reset();
            })
            .catch(() => {
                alert('Something went wrong. Please try again or contact us at +91 97911 67265.');
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            });
        });
    }

    // Scroll Animations (guarded for older browsers)
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.highlight-card, .location-card, .facility-card, .news-card, .form-card, .campus-card, .sub-temple-card, .mission-card, .gopuram-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
});
