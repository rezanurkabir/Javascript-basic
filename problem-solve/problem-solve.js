
// Print Random number between 1 to 10

function randomNumber (min,max){
    let randNum = Math.random () * (max-min+1)+min 
    let floorNum = Math.floor(randNum)
    return floorNum;
}
 let output = randomNumber (1,10)

 console.log(output)