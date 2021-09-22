const findButton = document.querySelector(".find-btn");

const findData = async () => {

    const infoContainer = document.querySelector(".info-container");
    infoContainer.innerHTML = "";
    const userInput = document.querySelector(".find-input").value;
    console.log(userInput)

    const seedData = await fetch("http://localhost:3021/viewHotels");
    const convertJson = await seedData.json();
    console.log(convertJson)


    const url = "http://localhost:3021/viewHotels";
    const seedData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
  let seedInfo = await seedData.json()
console.log(seedInfo)

}

   
findButton.addEventListener("click", () => findData())