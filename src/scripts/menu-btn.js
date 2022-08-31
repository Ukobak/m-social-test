const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const auth = document.querySelector(".buttons__auth");
let scrollpos = window.scrollY;
const scrollChange = 200;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-btn_open");
  menu.classList.toggle("menu__active");
  //auth.classList.toggle("buttons__auth_hidden");
});

const close_menu = () => {
  menu.classList.remove("menu__active");
  menuBtn.classList.remove("menu-btn_open");
  //auth.classList.remove("buttons__auth_hidden");
};

//закрыть меню при скролле
window.addEventListener("scroll", () => {
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) {
    close_menu();
  }
});

//закрыть меню при изменении ширины экрана до >= 1200
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    close_menu();
  }
});


