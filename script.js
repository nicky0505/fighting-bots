// ── MOBILE MENU ──
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ── FORM SUBMISSION ──
function submitForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const botChoice = document.getElementById('bot-choice').value;
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('form-msg');

  // basic validation
  if (!name) {
    formMsg.style.color = '#ff3355';
    formMsg.textContent = '⚠️ Please enter your name.';
    return;
  }

  if (!email || !email.includes('@')) {
    formMsg.style.color = '#ff3355';
    formMsg.textContent = '⚠️ Please enter a valid email.';
    return;
  }

  if (!botChoice) {
    formMsg.style.color = '#ff3355';
    formMsg.textContent = '⚠️ Please choose a bot!';
    return;
  }

  // success
  formMsg.style.color = '#00cfff';
  formMsg.textContent = `✅ Thanks ${name}! We'll contact you at ${email} about your ${formatChoice(botChoice)}.`;

  // clear fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('bot-choice').value = '';
  document.getElementById('message').value = '';
}

function formatChoice(choice) {
  if (choice === 'alpha') return '🔴 Hydro-Bot Alpha';
  if (choice === 'omega') return '🔵 Hydro-Bot Omega';
  if (choice === 'both') return '⚡ Full Bot Set';
  return 'bot';
}

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .step, .bot, .member').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// ── NAV HIGHLIGHT ON SCROLL ──
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});