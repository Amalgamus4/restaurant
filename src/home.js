const welcome = "Welcome to the Restaurant!";
import navbar from "./header";

export const homeTab = (() => {
  function heading() {
    const element = document.createElement("h1");
    element.textContent = welcome;
    return element;
  }

  function image() {
    const element = document.createElement("img");
    element.src = "../images/restaurant-image.jpg";
    return element;
  }
  document.getElementById("content").appendChild(heading());
  document.getElementById("content").appendChild(image());
})();
