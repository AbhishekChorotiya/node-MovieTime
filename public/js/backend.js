
const socket = io()

var seatData;

function getList() {
    socket.emit('getList')
}

socket.on('data', (a) => {
    seatData = a
    disabled(seatData)
})

function bookk(x){
    socket.emit('book',x)
}

function removee(x){
    socket.emit('remove',x)
}

function conformm(){
    socket.emit('conform')
}

function failedd(){
    socket.emit('failed')
}

// function addSeat(x, y, z) {

//     // console.log(x,y,z);
//     var data = {
//         id: x,
//         booked: y,
//         owner: z
//     }
//     socket.emit('addSeat', (data))
// }