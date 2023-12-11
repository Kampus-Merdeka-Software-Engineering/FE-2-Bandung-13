const API_URL = "http://localhost:3000";
//const API_URL = "https://vast-teal-pigeon-cap.cyclic.app";

//POST Booking
document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservationForm");
   
    reservationForm.addEventListener("submit", function (event) {
      event.preventDefault();
   
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const roomType = document.getElementById("roomType").value;
      const checkIn = document.getElementById("checkIn").value;
      const checkOut = document.getElementById("checkOut").value;
      const adult = document.getElementById("adult").value;
      const child = document.getElementById("child").value;

      if (!name || !email || !roomType || !checkIn || !checkOut || !adult || !child) {
        showSweetAlert(
          "Error",
          "Please complete all the columns in the form!",
          "error"
        );
        return;
      }
   
      const formData = {
        name, 
        email, 
        roomType,
        checkIn,
        checkOut,
        adult,
        child,
      };
   
      // Kirim data ke backend
      fetch(`${API_URL}/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("The form submission encountered an error.");
          }
          return response.json();
        })
        .then((data) => {
          showSweetAlert(
            "Success",
            "The room has been succesfully booked.",
            "success",
          ).then(() => {
            //setelah sukses arahkan ke home
            window.location.href = "index.html";
          });
        })
        .catch((error) => {
          console.error("Error:", error.message);
          showSweetAlert(
            "Error",
            "Booking process failed. Please try again later.",
            "error",
          );
        });
    });
  
    function showSweetAlert(title, text, icon) {
      return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonColor: "#645cff",
     });
    }
  });
  
    //GET Rooms API /rooms
    async function setupRoomsPage() {
      try {
        const response = await fetch(`${API_URL}/rooms`);
        const roomsData = await response.json();
        console.log(roomsData, "Rooms")
    
        const selector = document.getElementById("rooms");
        roomsData.data.forEach((room) => {
          const optionRooms = document.createElement("option");
          optionRooms.value = room.id;
          optionRooms.textContent = room.rooms; // Assuming room.name is the property containing room names
          selector.appendChild(optionRooms);
        });
      } catch (error) {
        console.error("Error", error);
      }
    }
    
    setupRoomsPage();