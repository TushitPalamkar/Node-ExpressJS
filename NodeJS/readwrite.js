const {readFileSync,writeFileSync}=require('fs')
const data=readFileSync('./textsample.txt','ascii')
console.log(data);
// writeFileSync('./textsample.txt',`Here is the result:${data}`)