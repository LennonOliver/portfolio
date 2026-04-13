document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // --- Parallax Effect ---
  // A subtle parallax binding movement to mouse cursor
  document.addEventListener('mousemove', (e) => {
    // Check if the device is likely touch-based, skip if so to prevent jittering
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.querySelectorAll('[data-parallax]').forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-parallax'));
      const x = (window.innerWidth / 2 - e.pageX) * speed;
      const y = (window.innerHeight / 2 - e.pageY) * speed;
      
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });

  // --- 3D Tilt Effect ---
  // Applying an ultra-premium 3D tilt effect on elements with .tilt-effect
  const tiltElements = document.querySelectorAll('.tilt-effect');
  
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation. Adjust multiplier for intensity
      const rotateX = ((y - centerY) / centerY) * -12; // Invert logic for natural tilt
      const rotateY = ((x - centerX) / centerX) * 12;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    el.addEventListener('mouseleave', () => {
      // Add a transition class dynamically for smooth reset if needed, 
      // but inline transition in CSS handles it generally
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

  // --- Scroll Intersection Observer for Fade-ins ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve to trigger only once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
});
