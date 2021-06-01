// export a function that creates a div element, adds content, and
// styles that element and then appends to DOM
const menuItem1 = "Chicken a la Stuff";
const menuItem1Description =
  "A delightful dish of chicken, cheese, and gummi bears";

const menuItem2 = "Everything but the Kitchen Sink";
const menuItem2Description = "Exactly what it sounds like";

import navbar from "./header";

export default function menuTab() {
  const element = document.createElement("h3");
  element.textContent = menuItem1;
  const element2 = document.createElement("p");
  element2.textContent = menuItem1Description;
  document.getElementById("content").appendChild(element);
  document.getElementById("content").appendChild(element2);

  const element3 = document.createElement("h3");
  element3.textContent = menuItem2;
  const element4 = document.createElement("p");
  element4.textContent = menuItem2Description;
  document.getElementById("content").appendChild(element3);
  document.getElementById("content").appendChild(element4);
}
