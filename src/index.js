import homeTab from "./home";
import menuTab from "./menu";
import aboutTab from "./about";
import contactTab from "./contact";
import navbar from "./header";

navbar();
homeTab();

document.getElementById("home").addEventListener("click", () => {
  clearPage();
  homeTab();
});
document.getElementById("menu").addEventListener("click", () => {
  clearPage();
  menuTab();
});
document.getElementById("about").addEventListener("click", () => {
  clearPage();
  aboutTab();
});
document.getElementById("contact").addEventListener("click", () => {
  clearPage();
  contactTab();
});

function clearPage() {
  document.getElementById("content").innerHTML = "";
}
