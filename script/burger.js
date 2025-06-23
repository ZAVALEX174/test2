document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const logo = document.querySelector('.header__logo');
  const headerNavBox = document.querySelector('.header__navigation');
  burgerBtn.addEventListener('click', () => {
    header.classList.toggle('border-radius');
    header.classList.toggle('all-height');
    logo.classList.toggle('header__fixed');
    burgerBtn.classList.toggle('header__fixed_burger');
    headerNavBox.classList.toggle('display-flex');
  })
})