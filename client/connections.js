const findButton = document.querySelector(".find-btn");
const infoContainer = document.querySelector(".info-container")






const readData = async () => {

    infoContainer.innerHTML = "";
    // const userInput = document.querySelector(".find-input").value;
    // console.log(userInput)
    const url = "http://localhost:3021/viewHotels";
    // // const seedData = await fetch(url, {
    //     method: "GET",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    // let seedInfo = await seedData.json();
    // console.log(seedInfo)
    const seedInfo = [
        {
         createdAt: "2021-09-22T00:27:13.594Z",
         hotelAddress: "4375 Admiralty Way, Marina Del Rey ",
         hotelImg: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/31/82/318244150.jpeg",
         hotelName: "The Ritz-Carlton, Marina del Rey",
         hotelState: "CA",
         id: 8,
         updatedAt: "2021-09-22T00:27:13.594Z",
         
        },
        {
            createdAt: "2021-09-22T00:27:13.594Z",
            hotelAddress: "4375 Admiralty Way, Marina Del Rey ",
            hotelImg: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/31/82/318244150.jpeg",
            hotelName: "The Ritz-Carlton, Marina del Rey",
            hotelState: "CA",
            id: 8,
            updatedAt: "2021-09-22T00:27:13.594Z",
            
           },
           {
            createdAt: "2021-09-22T00:27:13.594Z",
            hotelAddress: "4375 Admiralty Way, Marina Del Rey ",
            hotelImg: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/31/82/318244150.jpeg",
            hotelName: "The Ritz-Carlton, Marina del Rey",
            hotelState: "CA",
            id: 8,
            updatedAt: "2021-09-22T00:27:13.594Z",
            
           },
    ]
    for (item of seedInfo) {
        const id = item.id;
        const name = item.hotelName;
        const address = item.hotelAddress;
        const image = item.hotelImg;
        
        const hotelContainer = document.createElement("div");
        hotelContainer.className = "hotel-card"
        const idNumber = document.createElement("h2");
        const hotelName = document.createElement("h1");
        const hotelImg = document.createElement("img");
        const hotelAddress = document.createElement("p");
        
        const resStart = document.createElement("input")
        const resEnd = document.createElement('input')
        const reservationButton = document.createElement("button");

        resStart.placeholder = "Check-in"
        resEnd.placeholder = "Check-out"
        reservationButton.innerHTML = "reserve";
        idNumber.innerHTML = id;
        hotelName.innerHTML = name;
        hotelImg.src = image;
        hotelAddress.innerHTML = address;
        hotelContainer.append(hotelName, hotelImg, hotelAddress, idNumber, resStart, resEnd,reservationButton)
        infoContainer.append(hotelContainer)

        
        
        reservationButton.addEventListener("click", () => {
            console.log(reservationButton)
        })
    

}}





readData()

// findButton.addEventListener("click", () => readData())
