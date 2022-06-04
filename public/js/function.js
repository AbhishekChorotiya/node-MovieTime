
// Button click-unclick property
var price = 0

function seatCheck(i) {

    const element = document.getElementById(`G${i}`);

    if (element.innerHTML == `G${i}`) {
        element.innerHTML = `G${i}.`
        element.style.backgroundColor = 'rgb(10, 233, 84)';
        const { username } = Qs.parse(location.search, { ignoreQueryPrefix: true })
        bookk(i, username)
        price += 150
        document.getElementById('price').value = price
        console.log(price);
        console.log('booked  ', i);
    }
    else {
        element.innerHTML = `G${i}`
        element.style.backgroundColor = '#FFFFFF';
        const { username } = Qs.parse(location.search, { ignoreQueryPrefix: true })
        removee(i, username)
        price -= 150
        document.getElementById('price').value = price
        console.log(price);
        console.log('removed  ', i);
    }

}

function split(array) {

    var a = []

    array.forEach((num)=>{
        num.forEach((n)=>{
            a.push(n)
        })
    })
    return a
}

function splittt(array){
    var a = []
array.forEach(num =>{
    num.forEach(n=>{
        n.forEach(m=>{
            a.push(m)
        })
    })
})
return a
}

const disabled = (seatData) => {

    b = split(seatData)
    

    var seats = b.filter((seat) => {
        return seat.booked === true
    })

    seats.forEach((seat) => {
        document.getElementById(`G${seat.id}`).disabled = true
    })
}