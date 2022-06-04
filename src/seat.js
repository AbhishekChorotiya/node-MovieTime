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
    
    seatFile = loadSeat(owner)
    const G1 = new seat(id,booked,owner);
    
    seatFile.push(G1)
    save(seatFile,owner)

}

const remove = (id,owner)=>{

    let sn = id + 1
    seatFile = loadSeat(owner)

    const idSearch = seatFile.filter(function(seat){

        return seat.id != id
        
    })
    
    save(idSearch,owner)

}

const book = (id,owner)=>{

    seatFile = loadSeat(owner)
    remove(id,owner)
    addSeat(id,true,owner)

}

function loadSeat(owner){
    try{

        const dataBuffer = fs.readFileSync(`${owner}.json`)
        const dataStr = dataBuffer.toString()
        return JSON.parse(dataStr)
    
    }
    catch(e){
        return []
    }
}

function loadFinal(){
    try{

        const dataBuffer = fs.readFileSync('final.json')
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


const save = (x,y)=>{

    mainData = JSON.stringify(x)
    fs.writeFileSync(`${y}.json`,mainData)
}

const getList = ()=>{
   
    try{

        const dataBuffer = fs.readFileSync('conform.json')
        const dataStr = dataBuffer.toString()
        return JSON.parse(dataStr)
    
    }
    catch(e){
        return []
    }

}

const conform = (username)=>{
    seatConform = loadConform()
    seatFile = loadSeat(username)
    seatConform.push(seatFile)
    mainData = JSON.stringify(seatConform)
    fs.writeFileSync('conform.json', mainData)
    fs.unlinkSync(`${username}.json`)
}

const list = ()=>{
   
    try{

        const dataBuffer = fs.readFileSync('conform.json')
        const dataStr = dataBuffer.toString()
        return JSON.parse(dataStr)
    
    }
    catch(e){
        return []
    }

}
const final = ()=>{
    seatConform = loadFinal()
    seatFile = loadConform()
    seatConform.push(seatFile)
    mainData = JSON.stringify(seatConform)
    fs.writeFileSync('final.json', mainData)
}

const failed = ()=>{

    seatConform = loadFinal()
    seatFile = loadConform()
    seatFile = seatConform

    mainData = JSON.stringify(seatFile)
    fs.writeFileSync('conform.json',mainData)
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
    list,
    final,
    failed,
    save
    // failed
}