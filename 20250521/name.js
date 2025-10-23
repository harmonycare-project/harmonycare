window.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('harmonyUsername');
  const header = document.getElementById('headerText');

  if (name && header) {
    header.textContent = `안녕, ${name}!`;
  }
});
