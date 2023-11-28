function validateRegisterForm() {
  var username = document.getElementById("registerUsername").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("registerPassword").value;
  var termsCheckbox = document.getElementById("termsCheckbox").checked;

  var usernameError = document.getElementById("registerUsernameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("registerPasswordError");
  var termsError = document.getElementById("termsError");
  usernameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  termsError.innerHTML = "";

  if (username.trim() === "") {
    usernameError.innerHTML = "Username must be filled out";
    return false;
  }

  if (!isValidEmail(email)) {
    emailError.innerHTML = "Please enter a valid email address";
    return false;
  }

  if (password.trim().length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters";
    return false;
  }

  if (!termsCheckbox) {
    termsError.innerHTML = "You must agree to the terms and conditions";
    return false;
  }

  // Buat objek data untuk dikirim ke backend
  var data = {
    username: username,
    email: email,
    password: password,
  };

  // Kirim data ke backend menggunakan Fetch API
  fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      // Handle hasil dari backend
      console.log(result);

      // Redirect ke halaman lain jika registrasi berhasil
      if (result.success) {
        window.location.href = "index.html";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error jika diperlukan
    });

  return true;
}
