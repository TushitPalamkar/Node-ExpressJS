const {readFile,writeFile}=require('fs');
readFile('./readandwrite.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        console.log(result);
    }
})