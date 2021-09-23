const Sequelize = require('sequelize')
const express = require('express')
const {Users} = require('./models')
const {Reservations} = require('./models')
const {Hotels} = require('./models')
const cookieParser = require("cookie-parser")
const sessions = require("express-session")
const cors = require('cors')
const app = express()
const PORT = 3022;


app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));


const es6Renderer = require('express-es6-template-engine');
app.use(express.static(__dirname + '/client/'));
app.engine("html", es6Renderer);
app.set("views", "client");
app.set("view engine", "html");


app.use(cookieParser('abcdef'))
const oneDay = 1000 * 60 * 60 * 24
app.use(
	sessions({
		secret: "secret",
		resave: false,
		saveUninitialized: true,
		cookie: {secure: false, maxAge: oneDay}
	})
);





// CHANGES THE URL 
app.get("/", (req, res) => {
	res.render("login");
});

app.get("/hotels", (req, res) => {
	res.render("connections");
});

app.get("/reservations", (req, res) => {
	res.render("views");
});
// ------------------


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
	

	res.redirect("http://localhost:3021/viewHotels")
});

//  POSSIBLE LOGIN
app.post("/login", async (req, res)=> {
	const {username, password} = req.body;
	const userCheck = await Users.findOne({
		where: {
			username: username,
			password: password
		}
	});
	const userFound = userCheck.dataValues
	if(userCheck.dataValues){
	req.session.User = userFound;
		res.redirect("http://localhost:3021/viewHotels");
} else {
	res
	.status(401)
	.send("That is not a real user")
}
});


// CREATE RESERVATION
app.post("/createReservations", async (req, res) => {
	const {startDate, endDate, userId, hotelId} = req.body;
	const newRes = await Reservations.create({
		startDate: startDate,
		endDate: endDate,
		// userId: userId,
		hotelId: hotelId
	})
	res.send(newRes)
})




// READ HOTELS
app.get("/viewHotels", async (req, res) => {
	const allHotels = await Hotels.findAll()
	res.send(allHotels)
})



// VIEW RESERVATIONS
app.get ("/viewReservations", async (req, res)=> {
// if(req.session.user){
// 	res.render("/viewReservations/:id")

// } else{
// 	res.render("/login")
// }
	
	const reserv = await Reservations.findAll();
	res.send (reserv)
})




// UPDATE RESERVATIONS
app.post("/updateReservation/:id", async (req, res) => {
	const {startDate, endDate} = req.body
	const newDate = await Reservations.update(req.body,{
		where:{
			id:req.params.id
		
		}
	});
	
	res.send(newDate)
})

app.get("/viewReservationDetails/:id", async (req, res) => {
	const { hotelId } = req.params
	const details = await Hotels.findAll({
		where:{
			id:hotelId
		
		}
	});
	
	res.send(details)
})



// 	DELETE RESERVATIONS
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