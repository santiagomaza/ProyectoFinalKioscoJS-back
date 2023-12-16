const express = require("express")
const jsonServer = require("json-server")
const app = jsonServer.create()
const cors = require("cors")
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
require('dotenv').config()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(middlewares)
app.use(router)

app.listen(port, () => {
  console.log("La aplicación está corriendo en el puerto " + port )
})