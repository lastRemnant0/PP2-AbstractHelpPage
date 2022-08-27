const menuBtn = document.getElementById("menu-btn");
const barMobile = document.getElementById("topbar-mobile");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  barMobile.classList.toggle("active");
});
