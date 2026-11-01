/**
 * Architectural Preloader Controller
 * Salman Rasheed M. Portfolio
 */
(function initPreloader() {
  // Immediately lock scroll to prevent background jump
  document.documentElement.classList.add('overflow-hidden');
  document.body.classList.add('overflow-hidden');

  const preloader = document.getElementById('portfolio-preloader');
  const counterEl = document.getElementById('preloader-counter');
  const progressBar = document.getElementById('preloader-progress-bar');
  const statusEl = document.getElementById('preloader-status');

  if (!preloader || !counterEl || !progressBar || !statusEl) return;

  let progress = 0;
  let targetProgress = 15;
  let isCompleted = false;
  let isWindowLoaded = false;

  const telemetrySteps = [
    { threshold: 0, text: 'Bootstrapping Core Modules...' },
    { threshold: 24, text: 'Compiling WebGL Shaders & Canvas...' },
    { threshold: 52, text: 'Hydrating Project Repositories...' },
    { threshold: 78, text: 'Synchronizing Interface Telemetry...' },
    { threshold: 100, text: 'System Ready. Welcome.' }
  ];

  function updateTelemetry(val) {
    for (let i = telemetrySteps.length - 1; i >= 0; i--) {
      if (val >= telemetrySteps[i].threshold) {
        if (statusEl.innerText !== telemetrySteps[i].text) {
          statusEl.innerText = telemetrySteps[i].text;
        }
        break;
      }
    }
  }

  function finishPreloader() {
    if (isCompleted) return;
    isCompleted = true;

    progress = 100;
    counterEl.innerText = '100';
    progressBar.style.width = '100%';
    updateTelemetry(100);

    setTimeout(() => {
      // Slide preloader up like a theatrical curtain
      preloader.classList.add('preloader-hidden');

      // Unlock page scrolling
      document.documentElement.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');

      // Reveal hero section with rise effect
      const hero = document.getElementById('home');
      if (hero) hero.classList.add('hero-revealed');

      // Clean up DOM after transition
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 950);
    }, 280);
  }

  // Step progress smoothly
  const interval = setInterval(() => {
    if (isCompleted) {
      clearInterval(interval);
      return;
    }

    if (progress < targetProgress) {
      const delta = Math.max(1, Math.floor((targetProgress - progress) * 0.28));
      progress = Math.min(targetProgress, progress + delta);

      counterEl.innerText = progress < 10 ? '0' + progress : String(progress);
      progressBar.style.width = progress + '%';
      updateTelemetry(progress);
    }

    // Gradually increment target threshold over time
    if (targetProgress < 45) {
      targetProgress = Math.min(45, targetProgress + 4);
    } else if (targetProgress < 85) {
      targetProgress = Math.min(85, targetProgress + 2);
    } else if (isWindowLoaded && targetProgress < 100) {
      targetProgress = 100;
    }

    if (progress >= 100) {
      clearInterval(interval);
      finishPreloader();
    }
  }, 35);

  // Advance when assets complete
  if (document.readyState === 'complete') {
    isWindowLoaded = true;
    targetProgress = 100;
  } else {
    window.addEventListener('load', () => {
      isWindowLoaded = true;
      targetProgress = 100;
    });
  }

  // Safe fallback timer (max 2.0s)
  setTimeout(() => {
    targetProgress = 100;
    finishPreloader();
  }, 2000);

  // Fast-forward on user interaction (Click / Keydown)
  preloader.addEventListener('click', finishPreloader, { once: true });
  window.addEventListener('keydown', (e) => {
    if (!isCompleted && (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape')) {
      finishPreloader();
    }
  }, { once: true });
})();

