//Simple Array:
let myArray = ['Bangladesh',100,'Reza',['Dhaka','Khulna']]

//Array Access
 console.log(myArray[0])

//Array Constructor 
let arrConst =new Array ('Rahim','Reza',100)
console.log(arrConst)


// Square 
var arr = [2,5,6]
var newArr = []
for(let i=0 ; i<arr.length ; i++){
  newArr.push (arr[i] * arr[i] );
}
console.log(newArr);

// Filter Method
var arr1 = [1,2,3,4,5,6]
function getEven(item){
  return item % 2 == 0;
}
var arr2 = arr1.filter(getEven)
console.log(arr2)


// forEach Method
let students =['azim','kasim','masud']

students.forEach((item)=>{
    console.log(item)
})
// ForEach sum
var arr = [1,2,3,4,5,6]
let sum = 0
arr.forEach((v, i) => {
  if (i >= 2) {
    sum = sum + v
  }
});
console.log(`Res: ${sum}`)


// Example
let students =['azim','kasim','masud']
let studentCopy = [] ;
for(let i= 0; i < students.length ; i++){
    studentCopy.push(students[i])
}
console.log(studentCopy)
