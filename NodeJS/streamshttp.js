
const{createReadStream}=require('fs');
const http=require('http');

const server=http.createServer((req,res)=>
{
    const stream=createReadStream('./sample.txt','utf-8')
    stream.on('open',()=>
    {
        stream.pipe(res)
    })
    stream.on('error',(err)=>
{
    res.end(err)
})
})
server.listen(5000);