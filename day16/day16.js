function doSomething(val){
    var k = val;
    console.log('Hi')
    if (7>3){
        console.log('nice')
    }
    else if (val >0){
        console.log('awesome')
    }
    else if( val <0){
        console.log('bakwaas')
    }

    while(val > 20){
        console.log('go')
        val -= 5
    }
    for(var i =1; i< 11; i++){
        console.log(i*k)
    }

    var m = ['hi', 'bye', 'go']
    for (i in m) {
        console.log(i)
    }

    var n = {price:30, qty:3}
    for(i in n ){
        console.log(i) 
    }

    console.log(5 == '5')          // compares value and not data type
    console.log(5 === '5')
    console.log(5 != '5')

    document.write('yeh toh kuch naya hi aagya')          // document object modelling

}