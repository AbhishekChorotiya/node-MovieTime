const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const {addSeat,book,remove,getList} = require('./seat')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection',(socket)=>{

    socket.on('getList',()=>{
        data = getList()
        socket.emit('data',data)
    })

   socket.on('addSeat',(data)=>{
       console.log(data);
        addSeat(data.id,data.booked,data.owner)
   })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})