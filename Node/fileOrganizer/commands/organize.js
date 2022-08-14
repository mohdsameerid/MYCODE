
const fs = require("fs");     // fs module
const path = require("path"); // path module
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    if(srcPath == undefined){
        // console.log(srcPath);
        //The process.cwd() method returns the current working directory of the Node.js process.
        srcPath = process.cwd();
        // console.log("current srcPath :" +srcPath);
    }

    let organizedFiles = path.join(srcPath, "organized_files");
    // console.log("organized file path: "+organizedFiles);
    if(!fs.existsSync(organizedFiles)){
        fs.mkdirSync(organizedFiles)
    }
    else{
        console.log("organizedFiles dir already exixts");
    }
}

organize();