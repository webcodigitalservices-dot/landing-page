<script>
  // Toggle Privacy Section
  function togglePrivacy() {
    const content = document.getElementById('privacyContent');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }

  // Toggle Terms Section
  function toggleTerms() {
    const content = document.getElementById('termsContent');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }

  // Smooth scroll to form when CTA is clicked
  document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector('.cta-button');
    const formSection = document.querySelector('#contact-form');

    if (ctaButton && formSection) {
      ctaButton.addEventListener('click', function (e) {
        e.preventDefault();
        formSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  // Optional: Auto-close one toggle if the other is opened
  function closeOtherToggle(openId) {
    const toggles = ['privacyContent', 'termsContent'];
    toggles.forEach(id => {
      if (id !== openId) {
        document.getElementById(id).style.display = 'none';
      }
    });
  }

  function togglePrivacy() {
    const content = document.getElementById('privacyContent');
    const isVisible = content.style.display === 'block';
    closeOtherToggle('privacyContent');
    content.style.display = isVisible ? 'none' : 'block';
  }

  function toggleTerms() {
    const content = document.getElementById('termsContent');
    const isVisible = content.style.display === 'block';
    closeOtherToggle('termsContent');
    content.style.display = isVisible ? 'none' : 'block';
  }
</script>

