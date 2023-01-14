const toggle = document.getElementById("toggle");
const sections = document.getElementsByClassName("section");
const lights = document.getElementsByClassName("light");
const lightsSvg = document.getElementsByClassName("light-svg");

toggleHandler = () => {
  if (toggle.checked === false) {
    sections[0].setAttribute("data-bg", "#23b296");
    sections[1].setAttribute("data-bg", "#f15f61");
    sections[2].setAttribute("data-bg", "#DDBCF7");
    sections[3].setAttribute("data-bg", "#fca971");
  }
  if (toggle.checked === true) {
    sections[0].setAttribute("data-bg", "#1A1C52");
    sections[1].setAttribute("data-bg", "#1A1C52");
    sections[2].setAttribute("data-bg", "#1A1C52");
    sections[3].setAttribute("data-bg", "#1A1C52");
  }

  onScroll();
  [...lights].forEach((el) => {
    el.classList.toggle("dark");
  });

  [...lightsSvg].forEach((el) => {
    el.classList.toggle("dark-svg");
  });
};

toggle.addEventListener("click", toggleHandler);
