// 11654  아스키코드
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const answer = input.toString().charCodeAt(0)
// console.log(answer)

// 11720  숫자의합
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let numbers = input[1].split('').map(a => Number(a))
// const reducer = (acc, cur)=> acc+cur
// let answer =  numbers.reduce(reducer)
// console.log(answer)

// 10809  알파벳찾기
// const input = require("fs").readFileSync("/dev/stdin").toString();

// const array = [];
// for (let i = 97; i<=122; i++){
//     array.push(input.indexOf(String.fromCharCode(i)))
// }
// console.log(array.join(" "))

// 문자열반복
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let count = Number(input[0])
// for (let i =1 ; i<=count; i++ ){
//     const num = Number(input[i].split(" ")[0])
//     const str = input[i].split(" ")[1]
//     const strSplit = str.split('')
//     const strSplitRepeat = strSplit.map(el => el.repeat(num)).join('')
//     console.log(strSplitRepeat)
// }


// 단어공부
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input;

// rl.on("line", function (line) {
//   input = line;
//   rl.close();
// }).on("close", function () {
//   const count = new Array(26).fill(0);
//   const aToZ = [];
//   const upperCaseArr = input.toUpperCase().split("");

//   for (let i = 65; i <= 90; i++) {
//     [];
//     aToZ.push(String.fromCharCode(i));
//   }

//   for (let j = 0; j < upperCaseArr.length; j++) {
//     for (let k = 0; k < aToZ.length; k++) {
//       if (upperCaseArr[j] === aToZ[k]) {
//         count[k] += 1;
//       }
//     }
//   }

//   const max = count.reduce((a, b) => Math.max(a, b));
//   const index = count.indexOf(max);
//   const lastIndex = count.lastIndexOf(max);
//   const alphabet = String.fromCharCode(index + 65);

//   if (index !== lastIndex) {
//     console.log("?");
//   } else console.log(alphabet);
//   process.exit();
// });


// 1152 단어의개수 
// const input = require("fs").readFileSync("/dev/stdin").toString();
// const array = input.trim().split(" ")
// let ans = array.length
// if(array[0]===''){
//     console.log(0)
// }else{
//     console.log(ans)
// }

// 2908 상수 
// const input = require("fs").readFileSync("/dev/stdin").toString();
// let arr = input.split(' ')
// let num1 = Number(arr[0].split('').reverse().join(''))
// let num2 = Number(arr[1].split('').reverse().join(''))
// if (num1 > num2) {
//     console.log(num1)
// }else{
//     console.log(num2)
// }

// 다이얼
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// let phone = {
// 	2: "ABC",
// 	3: "DEF",
// 	4: "GHI",
// 	5: "JKL",
// 	6: "MNO",
// 	7: "PQRS",
// 	8: "TUV",
// 	9: "WXYZ",
// };
// let result = 0;

// for (let i = 0; i < input.length; i++) {
// 	for (let j = 2; j <= 9; j++) {
// 		if (phone[j].includes(input[i])) {
// 			result += j + 1;
// 			break;
// 		}
// 	}
// }

// console.log(result);

// 크로아티마
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) {
//   input = line;
//   rl.close();
// }).on("close", function () {
//   const changeNeed = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

//   for (let element of changeNeed) {
//     input = input.split(element).join("❤");
//   }

//   console.log(input.length);
//   process.exit();
// });

