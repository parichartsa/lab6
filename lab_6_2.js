const detailBtns = document.querySelectorAll('.show-detail-btn');

detailBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.nextElementSibling;
    if (detail.style.display === 'none') {
      detail.style.display = 'block';
      btn.innerHTML = 'Hide detail';
    } else {
      detail.style.display = 'none';
      btn.innerHTML = 'Show detail';
    }
  });
});