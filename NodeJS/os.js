const os=require('os');
console.log(os.userInfo());
console.log(`The system uptime is ${os.uptime()}`);
const currentos={
    name:os.type(),
    release:os.release(),
    memory:os.totalmem(),
}
console.log(currentos);