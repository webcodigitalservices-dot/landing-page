// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Find all legal toggle elements
  const toggles = document.querySelectorAll('.legal-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);

      if (!targetContent) return;

      const isVisible = targetContent.style.display === 'block';
      targetContent.style.display = isVisible ? 'none' : 'block';
    });
  });
});
