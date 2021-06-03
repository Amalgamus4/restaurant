// export a function that creates a div element, adds content, and
// styles that element and then appends to DOM
const menuItems = [
  "The Boring One",
  "The Everything but the Kitchen Sink One",
  "The Spicy One",
  "The Unusual One",
];

const descriptions = [
  "Beef, cheese, and lettuce. Can you get any more plain?",
  "Exactly what it sounds like.",
  "Spicy chorizo, jalapenos, habanero sauce, and pepper jack cheese.",
  "Do you really want to know?",
];

import navbar from "./header";

export default function menuTab() {
  const menuDisplay = document.createElement("div");
  menuDisplay.id = "menuText";
  document.getElementById("content").appendChild(menuDisplay);
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = document.createElement("h3");
    menuItem.textContent = menuItems[i];
    const description = document.createElement("p");
    description.textContent = descriptions[i];
    document.getElementById("menuText").appendChild(menuItem);
    document.getElementById("menuText").appendChild(description);
  }
}
