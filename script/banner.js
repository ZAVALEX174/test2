document.addEventListener("DOMContentLoaded", function () {
  const textWrapper = document.querySelector(".banner__text-desc-wrap");
  const btnOpen = document.querySelector(".show-more");
  const btnClose = document.querySelector(".show-more__active");

  btnOpen.addEventListener("click", function () {
    textWrapper.style.maxHeight = "1000px";
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
  })

  btnClose.addEventListener("click", function () {
    textWrapper.style.maxHeight = "335px";
    btnOpen.style.display = "block";
    btnClose.style.display = "none";
  })
})