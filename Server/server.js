const Sequelize = require('sequelize')
const express = require('express')
// const {Hotel_website} = require('/models')

const app = express()
const PORT = 3019;

app.use(express.json())






app.listen(PORT, console.log(`on ${PORT}`))