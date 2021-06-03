const welcome = "Welcome to Little Devil Tacos!";
import navbar from "./header";

export default function homeTab() {
  function heading() {
    const element = document.createElement("h1");
    element.textContent = welcome;
    return element;
  }

  function image() {
    const element = document.createElement("figure");
    const image = document.createElement("img");
    image.src = "../images/little-devil-small.jpg";
    const caption = document.createElement("figcaption");
    element.appendChild(image);
    element.appendChild(caption);
    return element;
  }
  document.getElementById("content").appendChild(heading());
  document.getElementById("content").appendChild(image());
}
