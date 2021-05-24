// export a function that creates a div element, adds content, and
// styles that element and then appends to DOM
import navbar from "./header";
import menuItem1 from "./content";

function menuTab() {
  const element = document.createElement("p");
  element.textContent = menuItem1();
  return element;
}

navbar();
document.getElementById("content").appendChild(menuTab());

export default menuTab;
