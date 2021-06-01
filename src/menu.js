// export a function that creates a div element, adds content, and
// styles that element and then appends to DOM
const menuItem1 = "Here's item 1";
import navbar from "./header";

export default function menuTab() {
  const element = document.createElement("p");
  element.textContent = menuItem1;
  document.getElementById("content").appendChild(element);
}
