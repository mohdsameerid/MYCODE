let inputArr = process.argv.slice(2);
// console.log(inputArr)
let cmd = inputArr[0];
let path = inputArr[1];
// let helpFunc = require("./commands/help");
let helpFunc = require("./commands/help");
// console.log(cmd);
// console.log(path)
console.log(helpFunc);
switch (cmd) {
    case "help":
        console.log("help");
        helpFunc.help();
        break;
    case "organize":
        // console.log("organize");

        break;    
    case "tree":
        console.log("tree");
         break;
    default:
        console.log("Entered Incorrect cmd");
        break;
}