(()=>{"use strict";function e(){document.getElementById("content").appendChild(function(){const e=document.createElement("h1");return e.textContent="Welcome to the Restaurant!",e}()),document.getElementById("content").appendChild(function(){const e=document.createElement("img");return e.src="../images/restaurant-image.jpg",e}())}function t(){document.getElementById("content").innerHTML=""}!function(){const e=document.getElementById("content");document.body.insertBefore(function(){const e=document.createElement("div");return e.id="navBarContainer",e}(),e),document.getElementById("navBarContainer").appendChild(function(){const e=document.createElement("ul");return e.id="navBarList",e}());const t=document.getElementById("navBarList");t.appendChild(function(){const e=document.createElement("li");return e.textContent="Home",e.id="home",e}()),t.appendChild(function(){const e=document.createElement("li");return e.textContent="Menu",e.id="menu",e}()),t.appendChild(function(){const e=document.createElement("li");return e.textContent="About Us",e.id="about",e}()),t.appendChild(function(){const e=document.createElement("li");return e.textContent="Contact Us",e.id="contact",e}())}(),e(),document.getElementById("home").addEventListener("click",(()=>{t(),e()})),document.getElementById("menu").addEventListener("click",(()=>{t(),function(){const e=document.createElement("h3");e.textContent="Chicken a la Stuff";const t=document.createElement("p");t.textContent="A delightful dish of chicken, cheese, and gummi bears",document.getElementById("content").appendChild(e),document.getElementById("content").appendChild(t);const n=document.createElement("h3");n.textContent="Everything but the Kitchen Sink";const o=document.createElement("p");o.textContent="Exactly what it sounds like",document.getElementById("content").appendChild(n),document.getElementById("content").appendChild(o)}()})),document.getElementById("about").addEventListener("click",(()=>{t(),function(){const e=document.createElement("p");e.textContent="We're so glad you could stop by. We've been busy preparing our newly remodeled location to serve you. Please stop by and and have a look at our daily special.",document.getElementById("content").appendChild(e)}()})),document.getElementById("contact").addEventListener("click",(()=>{t(),function(){const e=document.createElement("p");e.innerHTML='Call us at 888-555-1234 <br> <br> or stop by our downtown location <br> <br> 123 Any Street <br> Anytown, USA &nbsp 11111 <br> <br> You can also drop us a line at <a href="#">anon@anon.com</a>',document.getElementById("content").appendChild(e)}()}))})();