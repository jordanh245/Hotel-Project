// SHOWS INFORMATION FROM RESERVATIONS TAB 


const resContainer = document.querySelector('.res-container')
const showReservations = async () => {
	resContainer.innerHTML = "";
	const url = "http://localhost:3022/viewReservations"
	const resData = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
	let resInfo = await resData.json();
   
    
	for( item of resInfo){
	// 	const hotelId = item.hotelId
    //     console.log(hotelId)
    //     const hotelUrl = `http://localhost:3022/viewReservationDetails/${hotelId}`
    // const hotelData = await fetch(hotelUrl, {
    //     method: "GET",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });
    // let hotelInfo = await hotelData.json();
    // console.log(hotelInfo, "test")
        
        
        
        
        
        const start = item.startDate;
		const end = item.endDate
        const reserveId = item.id
        
        const id = document.createElement("p")
        id.className = "id"
		const startDate = document.createElement("p");
        startDate.className = "startDate"
		const endDate = document.createElement("p");
        endDate.className = "endDate"
		
        



		startDate.innerHTML= start;
		endDate.innerHTML= end;
        id.innerHTML= reserveId
        
       
		


		resContainer.append(id,startDate, endDate)

	}


}



// UPDATE DATES FOR RESERVATIONS


const updateButton = document.querySelector(".date-btn")

const updateRes = async () => {
   const updateId = document.querySelector(".updateId").value;
   const resDate = document.querySelector(".Check-in").value;
   const endResDate = document.querySelector(".Check-out").value;
    const url = `http://localhost:3022/updateReservation/${updateId}`;
    
 const dates = {
     startDate: resDate,
     endDate: endResDate
 }

    const createData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(dates),
    })    
}
updateButton.addEventListener("click", () => updateRes())





// DELETE RESERVATION

const deleteButton = document.querySelector('.delete-btn')
const deleteRes = async () => {
    const resIdNumber = document.querySelector(".resId").value;
    const url = `http://localhost:3022/deleteReservation/${resIdNumber}`
    console.log(resIdNumber)
    const destoryData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
         },
        
    })        
}

deleteButton.addEventListener("click", () => deleteRes())

showReservations()