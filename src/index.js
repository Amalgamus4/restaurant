import homeTab from "./home";
import menuTab from "./menu";
import aboutTab from "./about";
import contactTab from "./contact";

home();
document.getElementById("home").addEventListener("click", goHome);
document.getElementById("menu").addEventListener("click", goMenu);
document.getElementById("about").addEventListener("click", goAbout);
document.getElementById("contact").addEventListener("click", goContact);

function goHome() {
  clearPage();
  homeTab();
}

function goMenu() {
  clearPage();
  menuTab();
}

function goAbout() {
  clearPage();
  aboutTab();
}

function goContact() {
  clearPage();
  contactTab();
}
//when event listener fires, set DOM body to blank state

//tab switching logic, add event listeners to wipes out current contents
// and then runs correct tab module to populate it again
