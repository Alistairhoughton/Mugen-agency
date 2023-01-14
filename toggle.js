const toggle = document.getElementById("toggle");
const sections = document.getElementsByClassName("section");

toggleHandler = () => {
  if (toggle.checked === false) {
    console.log("false");
    sections[0].setAttribute("data-bg", "#23b296");
    sections[1].setAttribute("data-bg", "#f15f61");
    sections[2].setAttribute("data-bg", "#DDBCF7");
    sections[3].setAttribute("data-bg", "#fca971");
  }
  if (toggle.checked === true) {
    console.log("true");
    sections[0].setAttribute("data-bg", "grey");
    sections[1].setAttribute("data-bg", "grey");
    sections[2].setAttribute("data-bg", "grey");
    sections[3].setAttribute("data-bg", "grey");
  }
  console.log([...sections]);
  console.log(sections[0].dataset.bg);
  onScroll();
};

toggle.addEventListener("click", toggleHandler);
