const fs = require('fs');

const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 16`
).split('\n');
const input = (() => {
  let line = 0;
  return () => stdin[line];
})();
let t = input().split(" ")
let t1 = Number(t[0])
let t2 = Number(t[1])
console.log(t1 ,t2)
let arr= []
function isPrimeNum(x){
    for(let j=1; j<=Math.floor(Math.sqrt(i)); j++){
        if(i%j===0){
            return false
        }else{
            return true
        }
    }
}