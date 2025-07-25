document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // About Me toggle
  const btn = document.getElementById('about-toggle-btn');
  const moreText = document.getElementById('more-about');

  btn.addEventListener('click', () => {
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'block';
      btn.textContent = 'Show Less';
    } else {
      moreText.style.display = 'none';
      btn.textContent = 'Know More';
    }
  });

  // 🔥 Skills Tabs toggle (ADD THIS PART ONLY)
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
});