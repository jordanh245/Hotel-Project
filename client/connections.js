const findButton = document.querySelector(".find-btn");
const infoContainer = document.querySelector(".info-container")




//TAKES USER INPUT AND ADD IT TO RESERVATIONS TABLE
const reserveHotel = async (hotelId) => {
    
    const startDate = document.querySelector(`.start${hotelId}`).value;

    const endDate = document.querySelector(`.end${hotelId}`).value;
   
    
    const resTable = {
        startDate,
        endDate,
        hotelId 
        
    
    };
    console.log(resTable)
    const url = "http://localhost:3022/createReservations";
    const createReservation = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify(resTable),
      });
} 





// PULLS FROM OUR HOTEL DATABASE AND APPENDS IT TO THE SCREEN
const readData = async () => {

    infoContainer.innerHTML = "";
    // const userInput = document.querySelector(".find-input").value;
    // console.log(userInput)
    const url = "http://localhost:3022/viewHotels";
    const seedData = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let seedInfo = await seedData.json();
    // console.log(seedInfo)
   
    for (item of seedInfo) {
        
        const name = item.hotelName;
        const address = item.hotelAddress;
        const image = item.hotelImg;
        const hotelId = item.id
        const hotelContainer = document.createElement("div");
        hotelContainer.className ="hotel-card"

        
        const hotelName = document.createElement("h1");
        hotelName.className = "hotel-name";
        const hotelImg = document.createElement("img");
        hotelImg.className = "image";
        const hotelAddress = document.createElement("p");
        hotelAddress.className = "address-name";
        
        const resStart = document.createElement("input");
        resStart.className = `start${hotelId}`
        
        const resEnd = document.createElement('input')
        resEnd.className = `end${hotelId}`
       
        const reservationButton = document.createElement("button");
        reservationButton.className = "reservation";

        resStart.placeholder = "Check-in"
        resEnd.placeholder = "Check-out"
        
        reservationButton.innerHTML = "RESERVE";
        hotelName.innerHTML = name;
        hotelImg.src = image;
        hotelAddress.innerHTML = address;
        hotelContainer.append(hotelName, hotelImg, hotelAddress,  resStart, resEnd,reservationButton);
        infoContainer.append(hotelContainer)


        
        reservationButton.addEventListener("click", () => {
            reserveHotel(hotelId)
        })
    

}}


readData()


