
// Button click-unclick property

function seatCheck(i) {

    const element = document.getElementById(`G${i}`);

    if (element.innerHTML == `G${i}`) {
        element.innerHTML = `G${i}.`
        element.style.backgroundColor = 'rgb(10, 233, 84)';
    }
    else {
        element.innerHTML = `G${i}`
        element.style.backgroundColor = '#FFFFFF';
    }

}

const disabled = (seatData)=>{
    
    var seats = seatData.filter((seat)=>{
         return seat.booked === true
     })
 
    //  seats.forEach((seat) => {
    //      document.getElementById(`G${seat.id}`).disabled = true
    //  })
 }