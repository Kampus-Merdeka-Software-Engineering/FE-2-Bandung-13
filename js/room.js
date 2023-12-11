const API_URL = "http://localhost:3000";
//const API_URL = "https://vast-teal-pigeon-cap.cyclic.app";

document.addEventListener("DOMContentLoaded", async () => {
	await fetchAllRooms();
});

// room api

const fetchAllRooms = async () => {
	try {
		const response = await fetch(`${API_URL}/room`);
		const rooms = await response.json();
		console.log(rooms);
		displayRooms(rooms);
	} catch (error) {
		console.error("Error:", error);
	}
};

const displayRooms = (rooms) => {
	const section = document.getElementById("room");
	rooms.forEach((rooms) => {
        const div = document.getElementsByClassName("price");
        const price = document.createElement("div")
        price.innerHTML = `${rooms.price} IDR`;
        div.appendChild(price)

        const image = document.getElementsByClassName("image");
        image.innerHTML = `
            <img src=${rooms.imageUrl} class="image-room"/>    
        `;
        section.appendChild(image)

        const content = document.getElementsByClassName("content");
        content.innerHTML = `
            <h3>${rooms.roomType}</h3>
            <p>${rooms.description}</p>  
            <a href="#reservation" class="btn">book now</a>  
        `;
        section.appendChild(content)
	});
};