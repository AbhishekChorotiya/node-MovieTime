const socket = io()

function addSeat(x,y,z){

    // console.log(x,y,z);
    var data = {
        id: x,
        booked: y,
        owner: z
    }
    socket.emit('addSeat',(data))
}