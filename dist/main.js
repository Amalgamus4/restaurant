(() => {
  "use strict";
  var e = {};
  ((e) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  })(e);
  const t = () => {
    document.body.appendChild(
      (function () {
        const e = document.createElement("div");
        return (e.id = "navBarContainer"), e;
      })()
    ),
      document.getElementById("navBarContainer").appendChild(
        (function () {
          const e = document.createElement("ul");
          return (e.id = "navBarList"), e;
        })()
      ),
      document.getElementById("navBarList").appendChild(
        (function () {
          const e = document.createElement("li");
          return (e.textContent = "Home"), (e.id = "home"), e;
        })()
      ),
      document.getElementById("navBarList").appendChild(
        (function () {
          const e = document.createElement("li");
          return (e.textContent = "Menu"), (e.id = "menu"), e;
        })()
      ),
      document.getElementById("navBarList").appendChild(
        (function () {
          const e = document.createElement("li");
          return (e.textContent = "About Us"), (e.id = "about"), e;
        })()
      ),
      document.getElementById("navBarList").appendChild(
        (function () {
          const e = document.createElement("li");
          return (e.textContent = "Contact Us"), (e.id = "contact"), e;
        })()
      );
  };
  function n() {
    const t = document.createElement("p");
    return (t.textContent = (0, e.default)()), t;
  }
  t(), document.getElementById("content").appendChild(n());
  const c = n;
  function d() {
    const t = document.createElement("p");
    return (t.textContent = (0, e.default)()), t;
  }
  t(), document.getElementById("content").appendChild(d());
  const o = d;
  function a() {
    const t = document.createElement("p");
    return (
      (t.innerHTML =
        `${(0, e.default)().tel}` <
        br >
        `${(0, e.default)().address}` <
        br >
        `${(0, e.default)().city}, ${(0, e.default)().state}  ${
          (0, e.default)().zip
        }`),
      t
    );
  }
  t(), document.getElementById("content").appendChild(a());
  const u = a;
  home(),
    document.getElementById("home").addEventListener("click", function () {
      clearPage(),
        t(),
        document.getElementById("content").appendChild(
          (function () {
            const t = document.createElement("h1");
            return (t.textContent = (0, e.default)()), t;
          })()
        ),
        document.getElementById("content").appendChild(
          (function () {
            const e = document.createElement("img");
            return (e.src = "../images/restaurant-image.jpg"), e;
          })()
        );
    }),
    document.getElementById("menu").addEventListener("click", function () {
      clearPage(), c();
    }),
    document.getElementById("about").addEventListener("click", function () {
      clearPage(), o();
    }),
    document.getElementById("contact").addEventListener("click", function () {
      clearPage(), u();
    });
})();
