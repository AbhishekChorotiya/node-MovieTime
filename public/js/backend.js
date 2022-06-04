
const socket = io()

var seatData;

function getList() {
    socket.emit('getList')
}

socket.on('data', (a) => {
    seatData = a
    disabled(seatData)
})



function bookk(x,y){
    socket.emit('book',{x:x,y:y})
}

function removee(x,y){
    socket.emit('remove',{x:x,y:y})
}

function failed(){
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