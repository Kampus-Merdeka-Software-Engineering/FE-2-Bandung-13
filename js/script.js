let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".room-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let accordions = document.querySelectorAll(".faqs .row .content .box");

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subAcco) => {
      subAcco.classList.remove("active");
    });
    acco.classList.add("active");
  };
});

// FORM LOGIN Script
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form.signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// login button

function openForm() {
  document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
}

function btn_close() {
  document.getElementById("loginForm").style.display = "none";
}

// Script validate login
function validateLoginForm() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  var usernameError = document.getElementById("loginUsernameError");
  var passwordError = document.getElementById("loginPasswordError");
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
    .then((result) => {
      console.log(result);
      if (result.success) {
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
// selesai

// Script validate register
function validateRegisterForm() {
  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var usernameError = document.getElementById("registerUsernameError");
  var passwordError = document.getElementById("registerPasswordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";

  if (username.trim() === "") {
    usernameError.innerHTML = "Username must be filled out";
    return false;
  }

  if (password.trim().length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters";
    return false;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.innerHTML = "Passwords do not match";
    return false;
  }

  // Membuat objek data untuk dikirim ke backend
  var data = {
    username: username,
    password: password,
  };

  fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        window.location.href = "index.html";
      } else {
        alert("Registration failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return false;
}
// selesai
