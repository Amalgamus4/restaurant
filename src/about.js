//export a function that creates a div element and clears contents
// then runs tab module to populate again
const about =
  "We're so glad you could stop by. We've been busy preparing our newly remodeled location to serve you. Please stop by and and have a look at our daily special.";

export const aboutTab = (() => {
  const element = document.createElement("p");
  element.textContent = about;
  document.getElementById("content").appendChild(element);
})();
