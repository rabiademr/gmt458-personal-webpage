// Native cross-document transitions enhance navigation without intercepting links.
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionQuery.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.home-section').forEach(section => {
    section.classList.add('reveal'); observer.observe(section);
  });
  motionQuery.addEventListener('change', event => {
    if (event.matches) {
      document.querySelectorAll('.reveal').forEach(section => section.classList.add('is-visible'));
      observer.disconnect();
    }
  });
}
