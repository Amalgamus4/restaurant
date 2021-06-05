//export a function that creates a div element and clears contents
// then runs tab module to populate again
const about =
  "We started as just a small taco shop out of Bob's garage, but have grown to over 3 locations! So, 4. We have 4 Locations. But regardless of where you go to get your taco fix, you can rest assured that you'll get that great Little Devil taste you're craving.";

export default function aboutTab() {
  const element = document.createElement("p");
  element.textContent = about;
  element.id = "aboutText";
  element.setAttribute("class", "contentText");
  document.getElementById("content").appendChild(element);
}
