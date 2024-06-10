const{createReadStream,writeFileSync}=require('fs');
const stream=createReadStream('./sample.txt')

stream.on('data',(result)=>
{
    console.log(result)
})