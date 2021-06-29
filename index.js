const icon_hamburger = document.getElementById("icon-hamburger");
const icon_close = document.getElementById("icon-close");
const dropdown_menu = document.getElementById("dropdown-menu");
const items = document.querySelectorAll(".dropdown-item");

items.forEach(function (item) {
  const span = item.querySelector(".wrap");
  const dropdown_content = item.getElementsByClassName("dropdown-content")[0];
  const icon_arrow = item.getElementsByClassName("icon-arrow-dark")[0];
  span.addEventListener("click", () => {
    items.forEach(function (r) {
      if (r !== item) {
        r.getElementsByClassName("dropdown-content")[0].classList.remove(
          "span-block"
        );
        r.getElementsByClassName("icon-arrow-dark")[0].classList.remove(
          "translate"
        );
        r.getElementsByClassName("wrap")[0].classList.remove("gray");
      }
    });
    dropdown_content.classList.toggle("span-block");
    icon_arrow.classList.toggle("translate");
    span.classList.toggle("gray");
  });
});

icon_hamburger.addEventListener("click", () => {
  dropdown_menu.style.display = "block";
  icon_hamburger.style.display = "none";
  icon_close.style.display = "block";
});

icon_close.addEventListener("click", () => {
  dropdown_menu.style.display = "none";
  icon_hamburger.style.display = "block";
  icon_close.style.display = "none";
});
