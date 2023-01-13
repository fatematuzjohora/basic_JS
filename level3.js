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

let count = [3,10,9,5,2,11,7,15,12,4,1,13,6,14,8];
for(let i=0; i < count.length; i++){
   let v = count[i];
   if(v >=1 && v < 3 || v >=8 && v <= 15){
    console.log(count[i]);
   }

}