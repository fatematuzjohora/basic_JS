// let greeting = "Hello, My name is";
// let myname = "Fatema";
// let lastname = "tuzJohora";
// let fullname = myname + " " + lastname;


// let str = "And I have";
// let apple = 50;
// apple *= 3;
// let end = "apples";
// console.log(greeting, fullname, str, apple, end);
// let a = 4+7;
// console.log(a);
// let b = 5*9;
// console.log(b);
// let c = b/a;
// console.log(c);
// let x = 32;
// if(x == 9){
//   console.log('true');
// }else{
//   console.log('false');
// }

// let y = 'red';
// if(y == "blue"){
//   console.log('blue is detected')
// }else if(y == "green"){
//   console.log('green is detceted')
// }else{
//   console.log('not blue not green')
// }
// let n = 64;
// if(n>45){
//   if(n<65){
//     console.log(n);
//   }
// }
// let i = 2;
// while(i<10){
//     console.log(i);
//     i++;
// }

for(let i = 7; i < 13; i++) {
    console.log(i);
}

let num = [8, 9, 10, 11, 12, 13, 14, 15];
console.log(num[3]);
console.log(num);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let len = arr.length;
// for(let i = 0; i < len; i++){
//     if(arr[i] > 4){
//         console.log(arr[i]);
//     }
// }
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = arr.length;
for(let i = 0; i < len; i++){
    if(arr[i] > 4){
        console.log(arr[i]);
    }
}
function welcomeToBooleans() {
    return true;}
    function trueOrFalse(wasThatTrue) {
        if(wasThatTrue){
          return "Yes, that was true";
        }
       return "No, that was false"
       }
       function testEqual(val) {
        if (val == 12) { 
          return "Equal";
        }
        return "Not Equal";
      }
      
      testEqual(10);
      function testNotEqual(val) {
        if (val != 99) { 
          return "Not Equal";
        }
        return "Equal";
      }
      
      testNotEqual(10);
      function testGreaterOrEqual(val) {
        if (val >= 20) {  
          return "20 or Over";
        }
      
        if (val >= 10) {  
          return "10 or Over";
        }
      
        return "Less than 10";
      }
      
      testGreaterOrEqual(10);