import welcome from "./content";
import navbar from "./header";

const homeTab = () => {
  function heading() {
    const element = document.createElement("h1");
    element.textContent = welcome();
    return element;
  }

  function image() {
    const element = document.createElement("img");
    element.src = "../images/restaurant-image.jpg";
    return element;
  }
  navbar();
  document.getElementById("content").appendChild(heading());
  document.getElementById("content").appendChild(image());
};

export default homeTab;
