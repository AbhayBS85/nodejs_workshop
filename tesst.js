// console.log("Hello world");
// const fs = require('fs');

// const testfun = require('./abc.js');
// testfun();

const fs= require("fs");
var dateFormat= require("dateformat");

fs.readdir("./personal",(_,files) =>{
    files.forEach(file) => {
        if(/-01-/.test(file)){
            const abc=file.substring(0,file.indexOf('.'));
            console.log(file,dateFormat(abc,'dddd, mmmm ds , yyyy'))
        }
    }
})