let modal = document.querySelector(".modal");
let exitBtn = document.querySelector(".modal__exit");
let closeBtn = document.querySelector(".modal__close");
let authBtn = document.querySelector(".buttons__auth");
let regBtn = document.querySelector(".buttons__reg");

//открыть
authBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

regBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

//закрыть
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
exitBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//закрыть при клике за пределами окна
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

