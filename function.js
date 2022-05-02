function ddd(number){
  if(String(number).length===1){
    return number+ number +0
  }else if(String(number).length ===2){
    return number + Number(String(number).split('')[0])+Number(String(number).split('')[1])
  }else if (String(number).length ===3){
    return number+Number(String(number).split('')[0])+Number(String(number).split('')[1])+Number(String(number).split('')[2])
  }else if(String(number).length===4){
    return number+Number(Number(String(number).split('')[0]))+Number(Number(String(number).split('')[1]))+Number(Number(String(number).split('')[2]))+Number(String(number).split('')[3])
  }
}




let range =10000
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++){
  selfNumbers[ddd(i)]=false
}
for (let i = 0; i < range; i++) {
    if (selfNumbers[i]) {
        console.log(i);
    }
}







const fs = require('fs');
const n = fs.readFileSync('/dev/stdin').toString();

const num = Number(n);
let count= 0
for (let i = 1; i <= num; i++) {
  if (i < 100) {
    count++;
    continue;
  }
  let strNum = String(i);
  let A = Number(strNum[0]) - Number(strNum[1]);
  let B = Number(strNum[1]) - Number(strNum[2]);
  if (A === B) {
    count++;
  }
}

console.log(count)