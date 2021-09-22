const Sequelize = require('sequelize')
const express = require('express')
const {Users} = require('./models')
const {Reservations} = require('./models')
const {Hotels} = require('./models')
const app = express()
const PORT = 3021;

const cors = require('cors')

app.use(cors())


app.use(express.json()) 









// CREATE FOR THE USER
app.post("/createUser", async (req, res) => {
	const {firstName, lastName, email, username, password} = req.body;
	const newUser = await Users.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		username: username,
		password: password
	})
	

res.send(newUser)
});






// READ HOTELS
app.post("/viewHotels", async (req, res) => {
	const allHotels = await Hotels.findAll()
	res.send(allHotels)
})






// UPDATE
app.post("/updateReservation/:id", async (req, res) => {
	const {startDate, endDate} = req.body
	const newDate = await Reservations.update(req.body,{
		where:{
			id:req.params.id
		}
	})
	res.send(newDate)
})





// 	DELETE
app.post("/deleteReservation/:id", async (req, res) => {
	const removeRes = await Reservations.destroy({
		where:{
			id:req.params.id
		}
	})
	res.send("removed")
})



// DELETE HOTEL IF NEEDED
// app.post("/deleteHotel/:id", async (req, res) => {
// 	const removeHot = await Hotels.destroy({
// 		where:{
// 			id:req.params.id
// 		}
// 	})
// 	res.send("removed")
// })


app.listen(PORT, console.log(`on ${PORT}`))