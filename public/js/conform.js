function checkConf(){
    conformm(Qs.parse(location.search, { ignoreQueryPrefix: true }).username)
    socket.emit('list')
    socket.on('listt',(data)=>{

        function getID(arr){

            var a = []
            arr.forEach(num=> {
                num.forEach(n=>{
                    a.push(n.id)
                })
            });
            return a
        }
        
        
        function checkDuplicate(arr,data){
            array = arr;
        
            for(var i=0;i<=array.length-1;i++){
        
                temp = array[i]
        
                for(var j=(i+1); j<=array.length-1;j++){
        
                    if(array[j] == temp){
        
                        console.log('Duplicate found');
                        data.pop()
                        socket.emit('rev',data)
                        return 'duplicate found'
        
                    }
                    
        
                }
        
            }
            console.log('No duplicate found');
            return 'no duplicate found'
        }
        
        
        const first = getID(data);
        const second = checkDuplicate(first,data)

        
        console.log(second);
        return second

    })



}

