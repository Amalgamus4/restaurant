const welcome = "Welcome to Torquey's Tacos!";
import navbar from "./header";

export default function homeTab() {
  function heading() {
    const element = document.createElement("h1");
    element.textContent = welcome;
    return element;
  }

  document.getElementById("content").appendChild(heading());
}
