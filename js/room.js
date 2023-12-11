//const API_URL = "http://localhost:3000";
const API_URL = "https://vast-teal-pigeon-cap.cyclic.app";


// room api

async function setupRoomsPage() {
    try {
      const response = await fetch(`${API_URL}/room`);
      const roomsData = await response.json();
      console.log(roomsData, "Room")
  
      const selector = document.getElementById("room");
      roomsData.forEach((room) => {
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
  
