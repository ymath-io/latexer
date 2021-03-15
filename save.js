
function pack(toggle=true){
    var out = {data:[]};
    //out.title = document.querySelector("#ctitle").value;
    for (var i of info){
        var v;
        var t = i.type;
        if (t=="text"){
            v = document.querySelector("#"+i.id).innerHTML;
        }
        else if (t=="mq" || t=="dmq"){
            v= i.mathfield.latex();
        }
        else if (t=="break"){
            v= null;
        }
        
        out.data.push({"type":t, "value":v})
    }

    
    var jsonse = JSON.stringify(out);
    var blob = new Blob([jsonse], {type: "application/json"});
    var title="latex.json";
    
    saveAs(blob, title);
    if (toggle){
    $('.navbar-toggler').click(); }
}
