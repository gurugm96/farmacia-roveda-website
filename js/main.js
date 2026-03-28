/**
 * Farmacia Roveda - Centallo
 * Main JavaScript
 */

(function () {
    'use strict';

    /* ---- Mobile Menu ---- */
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('nav--open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close on link click
        nav.querySelectorAll('.nav__link').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('nav--open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on click outside
        document.addEventListener('click', function (e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('nav--open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
                nav.classList.remove('nav--open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });
    }

    /* ---- Header scroll shadow ---- */
    var header = document.querySelector('.header');
    if (header) {
        var lastScroll = 0;
        window.addEventListener('scroll', function () {
            var y = window.scrollY;
            if (y > 10) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
            lastScroll = y;
        }, { passive: true });
    }

    /* ---- Smooth scroll for hash links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Update URL without triggering scroll
                history.pushState(null, '', href);
            }
        });
    });

    /* ---- Cookie Banner ---- */
    var cookieBanner = document.getElementById('cookieBanner');

    function showCookieBanner() {
        if (cookieBanner) {
            // Slight delay so the transition is visible
            requestAnimationFrame(function () {
                cookieBanner.classList.add('cookie-banner--visible');
            });
        }
    }

    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('cookie-banner--visible');
        }
    }

    // Expose globally for inline onclick handlers
    window.acceptCookies = function () {
        try {
            localStorage.setItem('farmaciaroveda_cookies', 'accepted');
        } catch (e) {
            // localStorage not available, silently continue
        }
        hideCookieBanner();
    };

    window.rejectCookies = function () {
        try {
            localStorage.setItem('farmaciaroveda_cookies', 'rejected');
        } catch (e) {
            // silently continue
        }
        hideCookieBanner();
    };

    // Check consent on load
    try {
        var consent = localStorage.getItem('farmaciaroveda_cookies');
        if (!consent) {
            showCookieBanner();
        }
    } catch (e) {
        showCookieBanner();
    }

    /* ---- Fade-in animation on scroll ---- */
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var fadeElements = document.querySelectorAll('.fade-in');
        var fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in--visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        fadeElements.forEach(function (el) {
            fadeObserver.observe(el);
        });
    } else {
        // If no IntersectionObserver or reduced motion, show everything
        document.querySelectorAll('.fade-in').forEach(function (el) {
            el.classList.add('fade-in--visible');
        });
    }

    /* ---- Active nav link on scroll ---- */
    var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
    var sections = [];
    navLinks.forEach(function (link) {
        var id = link.getAttribute('href');
        if (id && id !== '#') {
            var section = document.querySelector(id);
            if (section) sections.push({ el: section, link: link });
        }
    });

    if (sections.length && 'IntersectionObserver' in window) {
        var activeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var matchingLink = sections.find(function (s) { return s.el === entry.target; });
                if (matchingLink) {
                    if (entry.isIntersecting) {
                        navLinks.forEach(function (l) { l.classList.remove('nav__link--active'); });
                        matchingLink.link.classList.add('nav__link--active');
                    }
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(function (s) { activeObserver.observe(s.el); });
    }

})();
