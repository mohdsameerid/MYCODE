function help(){
    console.log(`
         There are some CLI commands used in different situations:
         
         1) node main.js organize <path>
         2) node main.js help <path>
         3) node main.js tree
    `);
}

module.export = {
    help: help
}