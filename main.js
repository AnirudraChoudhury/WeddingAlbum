function wedding(){
    var mdoc = document.getElementById('mbody')
    var wdoc = document.getElementById('wbody')
    var rdoc = document.getElementById('rbody')

    mdoc.hidden=true;
    wdoc.hidden=false;
    wdoc.style.display="grid";
    rdoc.hidden=true;

}

function reception(){
    var mdoc = document.getElementById('mbody')
    var wdoc = document.getElementById('wbody')
    var rdoc = document.getElementById('rbody')

    mdoc.hidden=true;
    wdoc.hidden=true;
    rdoc.hidden=false;
    rdoc.style.display="grid";

}

function home(){
    var mdoc = document.getElementById('mbody')
    var wdoc = document.getElementById('wbody')
    var rdoc = document.getElementById('rbody')

    mdoc.hidden=false;
    wdoc.hidden=true;
    wdoc.style.display="None";
    rdoc.hidden=true;
    rdoc.style.display="None";

}