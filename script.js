let navTitle = document.getElementById("navTitle");
let mainInfo = document.getElementById("mainInfo");
let hamburger = document.getElementById("hamburger");
let footer = document.getElementById("footer");
let closeBtn = document.getElementById("closeBtn");

function openMenu() {
  hamburger.style.display = "none";
  navTitle.style.display = "none";
  mainInfo.style.display = "none";
  footer.style.display = "none";
  closeBtn.style.display = "block";
  document.getElementById("navList").style.display = "block";
}

function closeMenu() {
  hamburger.style.display = "block";
  navTitle.style.display = "block";
  mainInfo.style.display = "block";
  footer.style.display = "block";
  closeBtn.style.display = "none";
  document.getElementById("navList").style.display = "none";
}

hamburger.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);
