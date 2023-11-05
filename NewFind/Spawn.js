import {spawn} from 'child_process';
// const lsProcess = spawn('ls');
// lsProcess.stdout.on('data',data =>{
//     console.log(`aaaaa:: stdout:\n${data}`);
// })
// lsProcess.stderr.on("data",(data)=>{
//     console.log(`bbbbbb:: stdout: ${data}`);
// })
// lsProcess.on('exit',code=>{
//     console.log(`ccccc:: Process ended with ${code}`)
// })

const AnotherJSFileExecution = spawn('node',['hello.js'])
AnotherJSFileExecution.stdout.on('data',(data)=>{
    console.log(`stdout:\n ${data}`)
})


//hello.js
console.log("This is gangareddy calling from spawn.js :first line")
console.log("This is gangareddy calling from spawn.js: second line")

spawn(command[, args][, options])

Using spawn function the user can send any argumnets to the command that is launched in a new processs.
Instead of using the same node process,it generates a new one using a command. Usually used when child process want to send lot of data back to the parent process.

  
