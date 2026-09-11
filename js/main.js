/**
 * AADHITYA - Developer Portfolio Main Script
 * Handles typewriter effect, terminal contact form submission, and navbar interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Typewriter Animation for Hero Section
  initTypewriter();

  // 2. Navbar Scroll Style
  initNavbarScroll();

  // 3. Terminal Contact Form Handler (Formspree + Interactive Feedback)
  initTerminalContactForm();

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
   Terminal-Style Contact Form Handler
   -------------------------------------------------------------------------- */
function initTerminalContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const statusLog = document.getElementById('terminalStatusLog');

  if (!form || !submitBtn || !statusLog) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showStatus('error', '$ [ERROR 400]: Missing parameters. Please fill in all fields before transmitting.');
      return;
    }

    // UI Loading State
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="bi bi-arrow-repeat spin-icon"></i> TRANSMITTING...';
    showStatus('loading', '$ curl -X POST https://formspree.io/f/... \n$ encrypting payload and dispatching...');

    const formData = new FormData(form);
    const formAction = form.getAttribute('action');

    // Check if it is a real Formspree endpoint or fallback simulation
    const isMock = !formAction || formAction.includes('YOUR_FORMSPREE_ID') || formAction.includes('example');

    if (isMock) {
      // Realistic simulation for development/testing
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="bi bi-send-fill"></i> SEND MESSAGE';
        showStatus('success', `✔ [200 OK]: Message transmitted successfully!\n$ recipient: aadhitya.dev@gmail.com\n$ status: ACK received. Thank you, ${name}! I will be in touch shortly.`);
        form.reset();
      }, 1200);
      return;
    }

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="bi bi-send-fill"></i> SEND MESSAGE';

      if (response.ok) {
        showStatus('success', `✔ [200 OK]: Message received via Formspree!\n$ ack: Thank you, ${name}! Your transmission has been queued.`);
        form.reset();
      } else {
        const data = await response.json();
        const errDetail = data.errors ? data.errors.map(e => e.message).join(', ') : 'Transmission rejected.';
        showStatus('error', `$ [ERROR ${response.status}]: ${errDetail}`);
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="bi bi-send-fill"></i> SEND MESSAGE';
      showStatus('error', `$ [NETWORK_FAIL]: Unable to reach host. Please email directly to aadhitya.dev@gmail.com.`);
    }
  });

  function showStatus(type, msg) {
    statusLog.className = `terminal-status-log active ${type}`;
    statusLog.style.whiteSpace = 'pre-line';
    statusLog.textContent = msg;
  }
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
