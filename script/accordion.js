document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentNode;
      const isActive = item.classList.contains('active');

      // Закрываем все элементы
      document.querySelectorAll('.item').forEach(el => {
        el.classList.remove('active');
      });

      // Открываем текущий, если был закрыт
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
})