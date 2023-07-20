const navMainBar = document.getElementById("navMainBar");

const searchBar = document.getElementById("searchBar");

const gotoTop = document.querySelector(".gotoTop");

const navMainBarDisplay = () => {
  if (window.scrollY >= 650) {
    navMainBar.style.position = "fixed";
  } else {
    navMainBar.style.position = "unset";
  }
};

window.addEventListener("scroll", navMainBarDisplay);

searchBar.style.width = "0rem";

function searchIcon() {
  if (searchBar.style.width == "0rem") {
    searchBar.style.width = "20rem";
  } else {
    searchBar.style.width = "0rem";
  }
}

/* go to top  */
window.onscroll = function () {
  scrollForTopBtn();
};

const scrollForTopBtn = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
};

const BacktoTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/* open menu */

function openMenu() {
  if (navMainBar.style.maxHeight == "70px") {
    navMainBar.style.maxHeight = "280px";
  } else {
    navMainBar.style.maxHeight = "70px";
  }
}
