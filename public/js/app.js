const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});

window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});

var objUser = [
  {
    username: "user01",
    password: "1234",
  },
  {
    username: "user02",
    password: "dev123",
  },
];

function handleLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("Username is:" + username + " Password is:" + password);
}
