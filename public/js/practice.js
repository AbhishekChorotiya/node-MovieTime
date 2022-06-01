
// Button click-unclick property

document.getElementById('ggold1').innerHTML = 'G1'

function hi(){



    if(document.getElementById('ggold1').innerHTML == 'G1'){
        document.getElementById('ggold1').innerHTML = 'G1.'
        console.log('clicked')
    }
    else{
        document.getElementById('ggold1').innerHTML = 'G1'

        console.log('see')            
    }

}