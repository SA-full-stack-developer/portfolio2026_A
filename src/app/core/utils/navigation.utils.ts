export function navScrollTo(el: HTMLElement | null): void {
  if (!el) return;

  const start = window.scrollY;
  const target = el.getBoundingClientRect().top + window.scrollY;
  const duration = 650;
  const startTime = performance.now();

  const scroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, start + (target - start) * ease);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
}
