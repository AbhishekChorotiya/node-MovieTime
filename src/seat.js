const fs = require('fs');
const { stringify } = require('querystring');

class seat {
    constructor(id, booked,owner) {

        this.id = id
        this.booked = booked
        this.owner = owner

    }
}

const addSeat = (id,booked,owner)=>{
    
    seatFile = loadSeat()
    const G1 = new seat(id,booked,owner);
    
    seatFile.push(G1)
    save(seatFile)

}

const remove = (id)=>{

    let sn = id + 1
    seatFile = loadSeat()

    const idSearch = seatFile.filter(function(seat){

        return seat.id != id
        
    })
    
    save(idSearch)

}

const book = (id,owner)=>{

    seatFile = loadSeat()
    remove(id)
    addSeat(id,true,owner)

}

function loadSeat(){
    try{

        const dataBuffer = fs.readFileSync('seats.json')
        const dataStr = dataBuffer.toString()
        return JSON.parse(dataStr)
    
    }
    catch(e){
        return []
    }
}

function loadConform(){
    try{

        const dataBuffer = fs.readFileSync('conform.json')
        const dataStr = dataBuffer.toString()
        return JSON.parse(dataStr)
    
    }
    catch(e){
        return []
    }
}


function save(x){

    mainData = JSON.stringify(x)
    fs.writeFileSync('seats.json',mainData)
}

const getList = ()=>{
   
    try{

        const dataBuffer = fs.readFileSync('seats.json')
        const dataStr = dataBuffer.toString()
        return JSON.parse(dataStr)
    
    }
    catch(e){
        return []
    }

}

const conform = (id,booked,owner)=>{
    seatFile = loadSeat()
    mainData = JSON.stringify(seatFile)
    fs.writeFileSync('conform.json', mainData)
}

const failed = ()=>{

    seatConform = loadConform()
    seatFile = loadSeat()
    seatFile = seatConform

    save(seatFile)
}



// remove(2)

// for (let i = 1; i <=5; i++){
//     addSeat(i,false) 
// }

// for (let i = 1; i <=5; i++){
//     remove(i) 
// }
// book(3,'abhishek')

module.exports = {
    addSeat,
    remove,
    book,
    getList,
    conform,
    failed
}