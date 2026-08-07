export const scrollToSection = (id) => {
  if (!id) return;

  // Scrolling back to top / home
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const navElement = document.querySelector('nav');
    const navHeight = navElement ? navElement.offsetHeight : 70;
    const y = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }
};
