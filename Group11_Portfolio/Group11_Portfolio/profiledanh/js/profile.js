document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const toast = document.querySelector('.toast');
  const copyEmailButton = document.querySelector('.copy-email');
  const year = document.querySelector('#currentYear');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (menuToggle && navLinks) {
    const closeMenu = function () {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Mở menu');
    };

    menuToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add('is-visible');
    });
  }

  let toastTimeout;
  const showToast = function (message) {
    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(function () {
      toast.classList.remove('show');
    }, 2600);
  };

  const copyText = async function (text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        // Continue with the local fallback when clipboard permissions are unavailable.
      }
    }

    const input = document.createElement('textarea');
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();

    let copied = false;
    try {
      copied = document.execCommand('copy');
    } finally {
      input.remove();
    }

    return copied;
  };

  if (copyEmailButton) {
    copyEmailButton.addEventListener('click', async function () {
      const email = copyEmailButton.dataset.email;
      if (!email) {
        showToast('Không tìm thấy địa chỉ email để sao chép.');
        return;
      }

      try {
        const copied = await copyText(email);
        showToast(copied
          ? 'Đã sao chép email vào clipboard.'
          : 'Không thể sao chép tự động. Hãy sao chép email trực tiếp.');
      } catch (error) {
        showToast('Không thể sao chép tự động. Hãy sao chép email trực tiếp.');
      }
    });
  }
});
