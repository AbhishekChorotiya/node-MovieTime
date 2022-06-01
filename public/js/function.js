
// Button click-unclick property
var price = 0

function seatCheck(i) {

    const element = document.getElementById(`G${i}`);

    if (element.innerHTML == `G${i}`) {
        element.innerHTML = `G${i}.`
        element.style.backgroundColor = 'rgb(10, 233, 84)';
        bookk(i)
        price += 150
        document.getElementById('price').innerHTML = price
        console.log(price);
        console.log('booked');
    }
    else {
        element.innerHTML = `G${i}`
        element.style.backgroundColor = '#FFFFFF';
        removee(i)
        price -= 150
        document.getElementById('price').innerHTML = price
        console.log(price);
        console.log('removed');
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