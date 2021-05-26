//export a function that creates a div element and clears contents
// then runs tab module to populate again
const contactInformation = {
  tel: "888-555-1234",
  address: "123 Any Street",
  city: "Anytown",
  state: "USA",
  zip: "11111",
};
export const contactTab = (() => {
  const element = document.createElement("p");
  element.innerHTML = `${contactInformation.tel} <br>  ${contactInformation.address} <br> ${contactInformation.city}, ${contactInformation.state}  ${contactInformation.zip}`;
  document.getElementById("content").appendChild(element);
})();
