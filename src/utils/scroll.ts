export function scrollToSection(hash: string) {
  const id = hash.replace('#', '');
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
