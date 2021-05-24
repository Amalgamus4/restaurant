//export a function that creates a div element and clears contents
// then runs tab module to populate again
import navbar from "./header";
import contactInformation from "./content";

function contactTab() {
  const element = document.createElement("p");
  element.innerHTML =
    `${contactInformation().tel}` <
    br >
    `${contactInformation().address}` <
    br >
    `${contactInformation().city}, ${contactInformation().state}  ${
      contactInformation().zip
    }`;
  return element;
}

navbar();
document.getElementById("content").appendChild(contactTab());

export default contactTab;
