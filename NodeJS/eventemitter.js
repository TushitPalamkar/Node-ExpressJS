const EventEmitter=require('events');
const CustomEmitter=new EventEmitter()
CustomEmitter.on('response',(data)=>
{
    console.log(`Data ${data} recieved`)
})
CustomEmitter.emit('response',2)