function validateLoginForm() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("password").value;

  var usernameError = document.getElementById("loginUsernameError");
  var passwordError = document.getElementById("passwordError");
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  if (username.trim() === "") {
    usernameError.innerHTML = "Username must be filled out";
    return false;
  }

  if (password.trim().length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters";
    return false;
  }

  document.getElementById("loginForm").action = "index.html";

  return true;
}
