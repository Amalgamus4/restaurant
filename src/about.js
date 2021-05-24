//export a function that creates a div element and clears contents
// then runs tab module to populate again
import about from "./content";
import navbar from "./header";

function aboutTab() {
  const element = document.createElement("p");
  element.textContent = about();
  return element;
}
navbar();
document.getElementById("content").appendChild(aboutTab());

export default aboutTab;
