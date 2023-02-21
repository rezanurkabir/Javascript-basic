
// Print Random number between 1 to 10

function randomNumber (min,max){
    let randNum = Math.random () * (max-min+1)+min 
    let floorNum = Math.floor(randNum)
    return floorNum;
}
 let output = randomNumber (1,10)

 console.log(output)


// Function 

var arr1 = [1,3,6]
var arr2 = [2,3,4]
function arrSum(arr){

 var sum = 0 ;
  
 for(let i = 0 ; i< arr.length ; i++){
   sum = sum +arr[i]
 }
  return sum;
}


var sumArr = arrSum
console.log(sumArr(arr2))
