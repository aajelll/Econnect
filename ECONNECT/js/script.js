const revealItems = document.querySelectorAll('article');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.2
});

revealItems.forEach(item => {
  observer.observe(item);
});

function showPopup() {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'none';
}

function confirmConnect() {
    alert('Selamat bergabung ^__^');
    closePopup();
}

document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});