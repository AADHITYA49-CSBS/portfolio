/**
 * AADHITYA - Developer Portfolio Main Script
 * Handles typewriter effect, terminal contact form submission, and navbar interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Typewriter Animation for Hero Section
  initTypewriter();

  // 2. Navbar Scroll Style
  initNavbarScroll();

  // 3. Typeform Terminal Connection
  initTypeformTerminal();

  // 4. Smooth Scroll for Anchor Links
  initSmoothScroll();

  // 5. Active Nav Highlight on Scroll
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const typewriterElem = document.getElementById('typewriter');
  if (!typewriterElem) return;

  const roles = [
    'Java Developer',
    'Enterprise App Explorer',
    'RPA Automation Specialist',
    'Full-Stack Enthusiast',
    'Problem Solver'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   Navbar Scrolled State
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.custom-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   Typeform Terminal Connection Handler
   -------------------------------------------------------------------------- */
function initTypeformTerminal() {
  const iframe = document.getElementById('typeform-iframe');
  if (!iframe) return;

  iframe.addEventListener('load', () => {
    console.log('[Terminal] Typeform session connected successfully: nrIdI6pO');
  });
}

/* --------------------------------------------------------------------------
   Smooth Scrolling for Anchor Navigation
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        
        // Close bootstrap mobile menu if open
        const navCollapse = document.getElementById('navbarNav');
        if (navCollapse && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }

        const navHeight = 75;
        const targetPos = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Active Nav Link Highlighting (ScrollSpy)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
