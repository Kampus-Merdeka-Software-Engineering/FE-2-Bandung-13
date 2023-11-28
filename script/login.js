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

  // Membuat objek data untuk dikirim ke backend
  var data = {
    username: username,
    password: password,
  };

  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        window.location.href = "index.html";
      } else {
        alert("Login failed. Please check your credentials.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return false;
}
