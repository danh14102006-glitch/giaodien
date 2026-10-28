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

  // Client-side Contact Form Validation (Tieu chi 15)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = contactForm.elements['name'] ? contactForm.elements['name'].value.trim() : '';
      const email = contactForm.elements['email'] ? contactForm.elements['email'].value.trim() : '';
      const message = contactForm.elements['message'] ? contactForm.elements['message'].value.trim() : '';
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (name.length < 2) {
        formFeedback.style.color = '#ff6b6b';
        formFeedback.textContent = 'Vui lòng nhập họ và tên (ít nhất 2 ký tự).';
      } else if (!validEmail) {
        formFeedback.style.color = '#ff6b6b';
        formFeedback.textContent = 'Email không hợp lệ, vui lòng kiểm tra lại.';
      } else if (message.length < 10) {
        formFeedback.style.color = '#ff6b6b';
        formFeedback.textContent = 'Nội dung lời nhắn cần tối thiểu 10 ký tự.';
      } else {
        formFeedback.style.color = '#00f5d4';
        formFeedback.textContent = '✓ Gửi tin nhắn thành công! Cảm ơn bạn đã liên hệ.';
        contactForm.reset();
      }
    });
  }
});
