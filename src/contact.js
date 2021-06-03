//export a function that creates a div element and clears contents
// then runs tab module to populate again
const contactInformation = {
  tel: "888-555-1234",
  address: "123 Any Street",
  city: "Anytown",
  state: "USA",
  zip: "11111",
  email: "anon@anon.com",
};
export default function contactTab() {
  const element = document.createElement("p");
  element.innerHTML = `Call us at ${contactInformation.tel} <br> <br> or stop by our downtown location <br> <br> ${contactInformation.address} <br> ${contactInformation.city}, ${contactInformation.state} &nbsp ${contactInformation.zip} <br> <br> You can also drop us a line at <a href="#">${contactInformation.email}</a>`;
  element.id = "contactText";
  document.getElementById("content").appendChild(element);
}
