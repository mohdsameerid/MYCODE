let inputArr = process.argv.slice(2);
// console.log(inputArr)
let cmd = inputArr[0];
let path = inputArr[1];
// console.log(cmd);
// console.log(path)
switch (cmd) {
    case "organize":
        // console.log("organize");
        
        break;
    case "help":
        console.log("help");
        break;    
    case "tree":
        console.log("tree");
         break;
    default:
        console.log("Entered Incorrect cmd");
        break;
}