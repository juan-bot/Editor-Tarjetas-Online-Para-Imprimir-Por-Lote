// eliminar elementos
$('#remove').click(function(){
    var object = canvas.getActiveObject();
    if (!object){
        alert('Please select the element to remove');
        return '';
    }
    canvas.remove(object);
});
//cambiar color de letras
document.getElementById('cinput').onchange = function() {
    canvas.getActiveObject().set('fill',this.value);
    canvas.renderAll();
};
//cambiar tamaño de letras
function letra(){
    canvas.getActiveObject().set('fontSize',30);
    canvas.renderAll();
}
// bold etc

function estilo(opc){
    if(opc==1){
        canvas.getActiveObject().set("fontWeight", "bold");
    }else if(opc==2){
        canvas.getActiveObject().set("fontStyle", "italic");
    }else if(opc==3){
        canvas.getActiveObject().set("underline", true);
    } 
    canvas.renderAll();
}
/*cambiar la escala
document.getElementById('escalaCanvas').onchange = function() {
    zoomIt(.98)
};*/
/*
if(document.getElementById(this.id).checked == true) {
    if(this.id == "text-cmd-bold") {
        canvas.getActiveObject().set("fontWeight", "bold");
    }
    if(this.id == "text-cmd-italic") {
        canvas.getActiveObject().set("fontStyle", "italic");
    }
    if(this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("textDecoration", "underline");
    }
    if(this.id == "text-cmd-linethrough") {
        canvas.getActiveObject().set("textDecoration", "line-through");
    }
    if(this.id == "text-cmd-overline") {
        canvas.getActiveObject().set("textDecoration", "overline");
    }
    
    
    
} else {
    if(this.id == "text-cmd-bold") {
        canvas.getActiveObject().set("fontWeight", "");
    }
    if(this.id == "text-cmd-italic") {
        canvas.getActiveObject().set("fontStyle", "");
    }  
    if(this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("textDecoration", "");
    }
    if(this.id == "text-cmd-linethrough") {
        canvas.getActiveObject().set("textDecoration", "");
    }  
    if(this.id == "text-cmd-overline") {
        canvas.getActiveObject().set("textDecoration", "");
    }
}*/