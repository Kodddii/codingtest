// 10818 최대 최소
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let count = Number(input[0]);
// let numbers = input[1].split(' ').map(x => Number(x));
                                      
// numbers.sort((a,b) => a-b);

// console.log(`${numbers[0]} ${numbers[count - 1 ]}`)




// 2562 최대값
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));

// let inputSort= input.sort((x,y)=>  y - x)
// let max = inputSort[0]
// console.log(`${max}
// ${input.indexOf(max)+1}`)




// 2577 숫자개수
// #1
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));
// let mul = String(input[0]*input[1]*input[2])

// for(let i=0; i<=9; i++){
//     let count = 0
//     for(let j=0; j<mul.length; j++){
//         if(Number(mul[j])===i){
//             count ++;
//         }
//     }
//     console.log(count)
// }
// #2
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let num = String(input[0] * input[1] * input[2]);

// for (let i = 0; i <= 9; i++) { 
//    console.log(num.split(i + '').length - 1);    
// }



// 3052 나머지
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));
// let remArr = input.map(x => x%42)
// let set = new Set(remArr)
// let ans = [...set]
// console.log(ans.length)
// // #2
// let array = [1, 1, 1, 2, 2, 2, 3, 3];

// let newArray = array.filter((item, index) => array.indexOf(item) === index);

// console.log(newArray); // [ 1, 2, 3 ]

// 1546 평균
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
// let n = Number(input[0])
// let score = input[1].split(' ').map(x => Number(x))
// let max = Math.max.apply(null, score)
// let newArr = score.map(a => a*100/max);
// let sum = 0
// for (let x of newArr){
//     sum += x
// }
// console.log(sum/n)

// 잘못이해
// let newArr = score.map(a => 
//     a!==max ? a*100/max : a
// );

// 8958 ox퀴즈
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let num = Number(input[0]);
// for (let i = 1; i <= num; i++) {
//   let count = 0;
//   let sum = 0;
//   for (let j = 0; j < input[i].length; j++) {
//     if (input[i][j] === "O") {
//       count++;
//     } else {
//       count = 0;
//     }
//     sum += count;
//   }
//   console.log(sum);
// }



// 4344 평균은 넘겠지
// let arr = [100, 99, 98, 97, 96, 95, 94, 93, 91]
// let n = arr.length
// let sum = 0
// for (let x of arr){
//   sum +=x
// }
// let avg = sum/n
// let count = 0
// for (let y of arr) {
//   y > avg ? count ++ : count = count
// }
// const per = count/n*100
// console.log(avg)
// console.log(per.toFixed(3) +'%')


