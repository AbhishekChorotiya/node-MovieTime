const path = require('path')
const http = require('http')
const express = require('express')
const hbs = require('hbs');
const socketio = require('socket.io')
const {addSeat,book,remove,getList} = require('./seat')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname,"../partials")
app.set('views' , 'hbs')
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>{

    res.render('index', {
        title : 'Web App',
        name : 'Abhishek'
    })
    
            
 })

app.get('/play',(req,res)=>{
    res.render("play")
})

io.on('connection',(socket)=>{

    socket.on('getList',()=>{
        data = getList()
        socket.emit('data',data)
    })

    socket.on('book', (data)=>{
        remove(data)
        book(data,'Abhishek')
    })
    
    socket.on('remove',(data)=>{
        remove(data)
    })
//    socket.on('addSeat',(data)=>{
//        console.log(data);
//         addSeat(data.id,data.booked,data.owner)
//    })
})





server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})