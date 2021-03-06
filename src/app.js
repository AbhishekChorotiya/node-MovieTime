console.log('hello')

const request = require('request')
const http = require('http');
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser= require("body-parser")
const socketio = require('socket.io')
const {addSeat,book,remove,getList,conform,list,final,failed,save} = require('./seat');
const async = require('hbs/lib/async');


app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

//defining paths for express config
const publicDir = path.join(__dirname, "../public")

//const viewsPath = path.join(__dirname, "../templates")
const partialsPath = path.join(__dirname,"../partials")

// setup handlebars engine and views location 
app.set('view engine','hbs')
//app.set('views' , viewsPath)
hbs.registerPartials(partialsPath)
app.use(bodyParser.urlencoded({
    extended: true
}))

//setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req,res)=>{

    res.render('index', {
        title : 'Web App',
        name : 'Abhishek'
    })
    
            
 })

 app.get('/home',(req,res)=>{
    res.render("home")
})

app.get('/play',(req,res)=>{
    res.render("play")
})

app.post('/play', async (req,res)=>{

    try {
        
        const pr = req.body.price
        console.log(pr)
        res.render('play')

    } catch (e) {
        res.status(400).send("invalid data")
        
    }

})

io.on('connection',(socket)=>{

    socket.on('getList',()=>{
        data = getList()
        socket.emit('data',data)
    })

    socket.on('book', (data)=>{
        remove(data.x,data.y)
        book(data.x,data.y)
    })
    
    socket.on('remove',(data)=>{
        remove(data.x,data.y)
    })

    socket.on('conform',(x)=>{
        conform(x)
    })

    socket.on('failed',()=>{
        failed()
    })

    socket.on('list',()=>{
        data = list()
        socket.emit('listt',data)
    })

    socket.on('rev',(a)=>{
        save(a,'conform')
    })

    socket.on('final',()=>{
        final()
    })

//    socket.on('addSeat',(data)=>{
//        console.log(data);
//         addSeat(data.id,data.booked,data.owner)
//    })
})




 server.listen(port,()=>{
     console.log('Server is up on port ')
 })
