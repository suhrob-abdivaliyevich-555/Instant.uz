let up = document.querySelector(".up");

window.onscroll = () => {
   if (window.scrollY > 450) {
      up.classList.remove("hide");
   } else if (window.scrollY < 350) {
      up.classList.add("hide");
   }
};

up.addEventListener("click", () => {
   window.scrollTo(0, 0);
});

const open = document.querySelector(".open");
const burger = document.querySelector(".navbar__burger");
let navbarList = document.querySelector(".navbar__list");

burger.addEventListener("click", function () {
   navbarList.classList.toggle("open");
   burger.classList.toggle("active");
   document.body.classList.toggle("disable");
});

let navLinks = document.querySelectorAll(".navbar__list li");

navLinks.forEach((item) => {
   item.addEventListener("click", function (e) {
      navbarList.classList.toggle("open");
      burger.classList.toggle("active");
      document.body.classList.toggle("disable");
   });
});
