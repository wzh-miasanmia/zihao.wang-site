const button = document.querySelector('.nav-button');
const links = document.querySelector('.nav-links');
if (button && links) {
  button.hidden = false;
  document.documentElement.classList.add('js');
  const close = () => { button.setAttribute('aria-expanded', 'false'); links.classList.remove('is-open'); };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  });
  links.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { close(); button.focus(); }
  });
  window.matchMedia('(min-width: 760px)').addEventListener('change', close);
}
