// for(let i = 102; i >= 27; i -=3){
//     console.log(i);
// }

// let arr = [];
// for(let i = 3; i <13; i++){
//     arr.push(i);

// }
// console.log(arr);

// let num = [3,10,9,5,2,11,7,15,12,4,1,13,6,14,8];
// for(let i=0; i < num.length; i++){
//    let v = num[i];
//    if(v <=7 && v >=3){
//     console.log(num[i]);
//    }

// }

// let count = [3,10,9,5,2,11,7,15,12,4,1,13,6,14,8];
// for(let i=0; i < count.length; i++){
//    let v = count[i];
//    if(v >=1 && v < 3 || v >=8 && v <= 15){
//     console.log(count[i]);
//    }

// }
let word = "Microverse";
console.log(word.substring(0, 5));
console.log(word.substring(5));


let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13];
let num = 13;
if(count.includes(num) === true){
   console.log("found it");
}else{
   console.log("not found");
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
for(let i = 0; i <array.length; i++){
   if((array[i] >3) && (array[i] < 10)){
      newArray.push(array[i]);
   }

}
console.log(newArray);


let bigArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for(let i = bigArr.length - 1; i >= 0; i--){
   console.log(bigArr[i]);
   for(let j = bigArr[i].length -1; j >= 0; j--){
      console.log(bigArr[i][j]);
   }
}
let firstArray = [];
let extctr = 9;
for(let i = 0; i < 3; i++){
   let smallArr = [];
   for(let j =0; j <3; j++){
      smallArr.push(extctr);
      extctr--;

   }
   firstArray.push(smallArr);
}
console.log(firstArray);

function number(a, b){
   console.log(a * b);
}
number(2, 2);

function stud(id){
console.log("hello", id);
}
stud("fatema");

function sum(arr){
   let output = [];
   for(let i = 0; i < arr.length; i++){
      output.push(arr[i] * 5);
   }
   return output;
}
let result = sum([4, 5, 6, 7, 8]);
console.log(result);

function ariyan(arr){
   let outcome = [];
   for(let i = arr.length - 1; i >= 0; i--){
if(arr[i] === 1){
   outcome.push("one")
}
if(arr[i] === 2){
   outcome.push("two")
}
if(arr[i] === 3){
   outcome.push("three")
}
if(arr[i] === 4){
   outcome.push("four")
}

   }
   return outcome;
}
let refund = ariyan([1, 2, 3, 4])
let record = ariyan([1, 2, 1, 2])
console.log(refund);
console.log(record);