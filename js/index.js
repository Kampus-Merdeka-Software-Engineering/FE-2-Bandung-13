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

// Script validate register
const apiUrl = "http://localhost:3000/user.register"; // Ganti dengan URL backend Anda

async function validateRegisterForm() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match!");
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data);

    // Tambahkan logika untuk menangani respons dari backend (mungkin tampilkan pesan sukses atau error)
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
// selesai

// Script validate login
async function validateLoginForm() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data);

    // Tambahkan logika untuk menangani respons dari backend (mungkin arahkan pengguna ke halaman setelah login)
  } catch (error) {
    console.error("Error during login:", error);
  }
}

// JS Reservasi
document.getElementById("reservationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  submitReservation();
});

async function submitReservation() {
  const reservationData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    checkIn: document.querySelector('input[name="checkIn"]').value,
    checkOut: document.querySelector('input[name="checkOut"]').value,
    adults: document.querySelector('select[name="adults"]').value,
    child: document.querySelector('select[name="child"]').value,
    roomType: document.querySelector('select[name="roomType"]').value,
  };

  try {
    const response = await fetch("http://localhost:3000/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationData),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      throw new Error("Failed to book a room.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
