export const initCustomCursor = (): void => {
  if (window.innerWidth <= 820) return; // Skip on mobile touch screens

  let cursorDot = document.getElementById('cursorDot');
  let cursorRing = document.getElementById('cursorRing');

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.id = 'cursorDot';
    document.body.appendChild(cursorDot);
  }

  if (!cursorRing) {
    cursorRing = document.createElement('div');
    cursorRing.id = 'cursorRing';
    document.body.appendChild(cursorRing);
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  });

  const renderLoop = () => {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    if (cursorRing) {
      cursorRing.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
    }
    requestAnimationFrame(renderLoop);
  };
  renderLoop();

  // Add hover scale expansion on interactive elements
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea, .glass-card, .fav-btn, .filter-pill, .faq-question')) {
      cursorRing?.classList.add('cursor-hover');
      cursorDot?.classList.add('cursor-hover-dot');
    } else {
      cursorRing?.classList.remove('cursor-hover');
      cursorDot?.classList.remove('cursor-hover-dot');
    }
  });
};
