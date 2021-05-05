var fs = require("fs");

var data = "hello world !";

fs.writeFile("newFile.txt", data, (err)=> {
    if(err){
        console.log(err)
    }
    else{
        console.log('file written')
    }
});
