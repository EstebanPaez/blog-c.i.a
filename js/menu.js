document.getElementById("menu").addEventListener("click", hideShow);
let isActivate = false;

function hideShow() {
  if (!isActivate) {
    document.querySelector(".menu").classList.add("activate");
    isActivate = true;
  } else if (isActivate) {
    document.querySelector(".menu").classList.remove("activate");
    isActivate = false;
  }
}
