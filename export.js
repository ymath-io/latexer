var JSZip = require("jszip");
var zip; //the zip file
var f; // the folder
var tex; //the generated html text
//var ct; //the title of the course
var blob;
var title;
var content;
// takes in generated body and title as input, outputs entire page.
function plug(data){
    return `\\documentclass{article}
    \\begin{document}
          ${data}
    \\end{document}`
}
//wrap the tex file in a zip file so that we can give a folder with title of course.
function wrap(tex){
    blob = new Blob([tex], {type: "text/plain"});
     title="file.tex";
    
    
}
function give(){ //will give the file immediately
   
    FileSaver.saveAs(blob, title);
}
//this is the main function
function release(toggle=true){//called by the menus.
    makeCourse(info);
    content = plug(tex);
    wrap(content);
    give();
    if (toggle){
        $('.navbar-toggler').click(); }

}
