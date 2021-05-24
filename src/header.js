const navbar = () => {
  function navBarContainer() {
    const element = document.createElement("div");
    element.id = "navBarContainer";
    return element;
  }

  function navBarList() {
    const element = document.createElement("ul");
    element.id = "navBarList";
    return element;
  }

  function home() {
    const element = document.createElement("li");
    element.textContent = "Home";
    element.id = "home";
    return element;
  }

  function menu() {
    const element = document.createElement("li");
    element.textContent = "Menu";
    element.id = "menu";
    return element;
  }

  function about() {
    const element = document.createElement("li");
    element.textContent = "About Us";
    element.id = "about";
    return element;
  }

  function contact() {
    const element = document.createElement("li");
    element.textContent = "Contact Us";
    element.id = "contact";
    return element;
  }

  document.body.appendChild(navBarContainer());
  document.getElementById("navBarContainer").appendChild(navBarList());
  document.getElementById("navBarList").appendChild(home());
  document.getElementById("navBarList").appendChild(menu());
  document.getElementById("navBarList").appendChild(about());
  document.getElementById("navBarList").appendChild(contact());
};

export default navbar;
