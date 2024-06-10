const{readFile, writeFile} =require('fs');
const util=require('util');
const readFilePromises=util.promisify(readFile);
const writeFilePromises=util.promisify(writeFile);
async function getText()
{
    try{
        const first=await readFilePromises('./textsample.txt','utf-8')
        const second=await readFilePromises('./readandwrite.txt','utf-8')
        console.log(first," ",second);
    }
    catch(error){
        console.log(error);
    }
}
getText();