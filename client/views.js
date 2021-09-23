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
		const start = item.startDate;
		const end = item.endDate
        const reserveId = item.id
        

		const startDate = document.createElement("p");
		const endDate = document.createElement("p");
		const id = document.createElement("p")
       
        



		startDate.innerHTML= start;
		endDate.innerHTML= end;
        id.innerHTML= reserveId
        
       
		


		resContainer.append(startDate, endDate,id)

	}


}
// 
// const updateButton = document.querySelector('.date-btn')

// const updateRes = async () => {
//    const updateId = document.querySelector(".updateId").value;

//     const url = `http://localhost:3022/updateReservation/${updateId}`
    
    

//     const data = {
//         startDate,
//         endDate
//     }

//     const createData = await fetch(url, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//             'Content-Type': 'application/json',
//          },
//          body: JSON.stringify(data),
//     })    
// }
// updateButton.addEventListener("click", () => updateRes())




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