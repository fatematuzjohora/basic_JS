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