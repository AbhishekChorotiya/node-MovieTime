const socket = io()

var seatData;

function getList() {
    socket.emit('getList')
}

socket.on('data', (a) => {
    seatData = a
    console.log(seatData);
})

function addSeat(x, y, z) {

    // console.log(x,y,z);
    var data = {
        id: x,
        booked: y,
        owner: z
    }
    socket.emit('addSeat', (data))
}